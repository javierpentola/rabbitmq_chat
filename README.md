### Project Documentation: Real-Time Chat Application with RabbitMQ

---

#### **Project Overview**

**Project Name:** Real-Time Chat Application

**Technologies Used:**
- **HTML:** For creating the structure and content of the web pages.
- **CSS:** For styling the web pages to make them visually appealing.
- **JavaScript:** For adding interactivity to the frontend.
- **Node.js:** The main programming language used for backend development.
- **Express.js:** A web framework for Node.js to create the web server and handle requests.
- **Socket.io:** For enabling real-time, bidirectional communication between web clients and servers.
- **RabbitMQ:** A message broker used for message queuing to ensure reliable message delivery between the server and clients.
- **Ngrok:** For exposing the local server to the internet to allow testing from multiple devices.

**Description:** This project is a real-time chat application that uses RabbitMQ to handle message queuing, ensuring reliable delivery of messages between users. The chat interface updates in real-time as messages are sent and received.

---

### **Technologies Usage**

1. **HTML:**
   - **Usage:** HTML is used to create the structure of the chat interface, including input fields and message display areas.
   - **Files:** `public/index.html`

2. **CSS:**
   - **Usage:** CSS is used to style the chat interface, ensuring it is user-friendly and visually appealing.
   - **Files:** `public/styles.css`

3. **JavaScript:**
   - **Usage:** JavaScript, along with Socket.io, is used to handle real-time communication between the client and server. It captures user inputs, sends messages, and updates the chat interface dynamically.
   - **Files:** JavaScript code is embedded directly within `public/index.html`.

4. **Node.js:**
   - **Usage:** Node.js is used for backend development. It handles server logic, integrates with RabbitMQ, and manages Socket.io connections.
   - **Files:** `server.js`

5. **Express.js:**
   - **Usage:** Express.js is used to create the web server, handle HTTP requests, and serve static files.
   - **Files:** `server.js`

6. **Socket.io:**
   - **Usage:** Socket.io is used for real-time, bidirectional communication between the server and web clients, enabling the live chat functionality.
   - **Files:** `server.js`, `public/index.html`

7. **RabbitMQ:**
   - **Usage:** RabbitMQ is used as a message broker to queue messages, ensuring they are delivered reliably between clients through the server.
   - **Files:** Configuration is handled within `server.js`.

8. **Ngrok:**
   - **Usage:** Ngrok is used to expose the local development server to the internet, allowing testing of the chat application from multiple devices.
   - **Instructions:** Run `ngrok http 3000` to start Ngrok and get a public URL.

---

### **Setup and Usage Instructions**

To set up and use the project after downloading the code, follow these steps:

1. **Clone the Repository:**
   - Use `git clone` to clone the repository to your local machine.
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory:**
   - Change your working directory to the project folder.
   ```bash
   cd Rabbit_Chat
   ```

3. **Install Dependencies:**
   - Install the required Node.js packages using `npm`.
   ```bash
   npm install
   ```

4. **Start RabbitMQ Server:**
   - Ensure RabbitMQ is installed and running on your machine. You can download RabbitMQ from its [official website](https://www.rabbitmq.com/download.html).
   - Start RabbitMQ and verify it's running by accessing `http://localhost:15672/` (default credentials are `guest`/`guest`).

5. **Run the Node.js Server:**
   - Start the server by running the following command.
   ```bash
   node server.js
   ```

6. **Expose the Server with Ngrok:**
   - Open a new terminal window and run Ngrok to expose your local server.
   ```bash
   ngrok http 3000
   ```
   - Note the public URL provided by Ngrok.

7. **Access the Application:**
   - Open a web browser and navigate to the Ngrok URL (e.g., `http://abcdef1234.ngrok.io`).

8. **Using the Chat Application:**
   - Open the Ngrok URL in multiple browser tabs or devices.
   - Type a message in the input field and click "SEND".
   - The message should appear in real-time across all connected clients.
