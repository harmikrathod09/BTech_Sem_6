const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Vite dev server
        methods: ["GET", "POST"]
    }
});

// Use CORS middleware
app.use(cors());

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("send_message", (messageData) => {
        console.log("Message received:", messageData);

        // Broadcast the message to all connected clients
        io.emit("receive_message", messageData);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
    console.log("Accepting connections from http://localhost:5173");
});