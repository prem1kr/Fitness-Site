const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // React app's URL (adjust port as needed)
    methods: ['GET', 'POST'],
  },
});

// Handle connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for messages from the client
  socket.on('sendMessage', (message) => {
    console.log('Message received:', message);

    // Emit a reply back to the client
    const botReply = `Bot reply to: "${message}"`;
    socket.emit('receiveMessage', botReply);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on http://localhost:${PORT}`);
});
