import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ENV.CLIENT_URL,
        credentials: true,
    }
});

// apply authentication middleware to all socket connections
io.use(socketAuthMiddleware);

// we will use this function to check if the user is online or not
export function getReceiverSocketId(receiverId) {
    return userSocketsMap[receiverId];
}

const userSocketsMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
    const userId = socket.userId;
    userSocketsMap[userId] = socket.id;

    // io.emit to all clients the list of online users
    io.emit("getOnlineUsers", Object.keys(userSocketsMap));

    // with socket.on we listen for events from clients
    socket.on("disconnect", () => {
        delete userSocketsMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketsMap));
    });
});

export { io, app, server };