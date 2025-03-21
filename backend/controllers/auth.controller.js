import { User } from "../models/user.models.js";
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSerCookie.js';
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { sendPasswordResetEmail, sendPasswordSuccessEmail } from "../mailtrap/emails.js";
const bcrypt = bcryptjs; // Alias to make code consistent

import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/emails.js";
import jwt from 'jsonwebtoken'; // Use import for jsonwebtoken

export const signup = async(req, res) => {
    const { email, password, name } = req.body;

    try {
        if (!email || !password || !name) {
            throw new Error("All fields are required");
        }
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
    } catch (error) {
        res.status(404).json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
        email,
        password: hashedPassword,
        name,
        verificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
    });
    await user.save();
    generateTokenAndSetCookie(res, user._id);
    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: {
            password: undefined
        }
    });
};

export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();
        await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password); // Use bcrypt (alias for bcryptjs)
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Generate a token (assuming JWT is used)
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return res.status(200).json({ success: true, token, message: "Login successful" });
    } catch (error) {
        console.error("Error in login", error);
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token");
    try {
        // Perform logout logic, e.g., clearing cookies or invalidating tokens
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error logging out", error: error.message });
    }
};

export const forgotPassword= async(req, res)=>{
    const {email}= req.body;
    try{
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message:"user not found"});
        }
        const resetToken= crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt= Date.now()+ 1*60*60*1000;
        user.resetPasswordToken=resetToken;
        user.resetPasswordExpiresAt=resetTokenExpiresAt;
        await user.save();

        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

        res.status(200).json({success:true, message:"password reset link sent to your email"});
    }

    catch(error){
      console.log("Error in forgotPassword", error);
      res.status(400).json({success:false,message:error.message});
    }
}

export const resetPassword= async (req, res)=>{
    try {
        const { token } = req.params;
        const { password } = req.body;
    
        // Find the user by resetPasswordToken and check if it hasn't expired
        const user = await User.findOne({
          resetPasswordToken: token,
          resetPasswordExpiresAt: { $gt: Date.now() },
        });
    
        if (!user) {
          return res.status(400).json({ success: false, message: 'Invalid or expired reset token' });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined; // Clear reset token after use
        user.resetPasswordExpiresAt = undefined; // Clear expiration time
        await user.save();
    
        // Send a success email (optional)
        await sendPasswordSuccessEmail(user.email);
    
        res.status(200).json({ success: true, message: 'Password reset successful' });
      } catch (error) {
        console.error('Error in resetPassword:', error);
        res.status(400).json({ success: false, message: error.message });
      }
    }


export const checkAuth = async (req, res) => {
    try {
      // Ensure that req.userId is available (set by authentication middleware)
      if (!req.userId) {
        return res.status(401).json({ success: false, message: "User not authenticated" });
      }
  
      // Find the user by ID, excluding the password field
      const user = await User.findById(req.userId).select("-password");
      
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // If user is found, return success and user data
      res.status(200).json({ success: true, user });
    } catch (error) {
      // Log and return the error with status code 500 (Internal Server Error)
      console.error("Error in checkAuth:", error);
      res.status(500).json({ success: false, message: "Server error occurred" });
    }
  };
