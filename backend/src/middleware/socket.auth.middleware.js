import jwt from "jsonwebtoken"
import { ENV } from "../lib/env.js"
import User from "../models/User.js"

export const socketAuthMiddleware = async (socket, next) => {
    try {

        // Extract token from handshake headers (assuming token is sent in cookies)
        const token = socket.handshake.headers.cookie
            ?.split("; ")
            .find((row) => row.startsWith("jwt="))
            ?.split("=")[1];

        if (!token) {
            return next(new Error("Unauthorized - No token provided"));
        }

        // verify token
        const decoded = jwt.verify(token, ENV.JWT_SECRET);

        if (!decoded) return res.status(401).json({ message: "Unauthorized - Invalid token" })

        // find the user associated with the token
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
    
        socket.user = user;
        socket.userId = user._id.toString();

        next();
    } catch (error) {
        console.error("Socket authentication error:", error.message);
        next(new Error("Authentication failed"));
    }
};