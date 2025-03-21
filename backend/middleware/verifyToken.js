import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const router = express.Router();

// Middleware to verify the token
export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies?.token; // Retrieve token from cookies
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - no token provided",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - invalid token",
            });
        }

        req.userId = decoded.userId; // Attach userId to request object
        next(); // Proceed to next middleware or route handler
    } catch (error) {
        console.error("Error in verifyToken middleware:", error);
        return res.status(500).json({
            success: false,
            message: "Server error during token verification",
        });
    }
};

// Check Auth Route
router.get("/check-auth", verifyToken, async (req, res) => {
    try {
        // Retrieve user details based on userId (assumes a `User` model or database query)
        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error("Error in /check-auth route:", error);
        return res.status(500).json({
            success: false,
            message: "Server error during authentication check",
        });
    }
});

export default router;
