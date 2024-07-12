const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const amqp = require('amqplib');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const QUEUE = 'chat';

async function startRabbitMQ() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        console.log('Connected to RabbitMQ');
        const channel = await connection.createChannel();
        console.log('Channel created');
        await channel.assertQueue(QUEUE, { durable: true });
        console.log(`Queue ${QUEUE} asserted`);

        channel.consume(QUEUE, msg => {
            if (msg !== null) {
                console.log('Message received:', msg.content.toString());
                io.emit('message', msg.content.toString());
                channel.ack(msg);
            }
        });

        return channel;
    } catch (error) {
        console.error('Failed to connect to RabbitMQ:', error);
    }
}

let channel;

startRabbitMQ().then(ch => {
    channel = ch;
    if (!channel) {
        console.error('Failed to create a channel');
    }
});

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        if (channel) {
            const ip = socket.request.connection.remoteAddress;
            const message = `${ip}: ${msg}`;
            channel.sendToQueue(QUEUE, Buffer.from(message));
            console.log('Message sent:', message);
        } else {
            console.error('Channel is not available');
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
