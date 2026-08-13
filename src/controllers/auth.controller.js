import { checkExistingUser , hashPassword, comparePassword, createUser} from "../services/auth.service.js";
import { generateToken } from "../services/token.service.js";
import { createRefreshTokenSession } from "../services/refreshToken.service.js";
import { verifyRefreshTokenSession } from "../services/refreshToken.service.js";
import User from "../models/user.model.js";

export const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existingUser = await checkExistingUser(email);

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email is already registered",
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = await createUser(email, hashedPassword);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                email: user.email,
            },
        });

    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existingUser = await checkExistingUser(email);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        } 

        const isPasswordValid = await comparePassword(
            password,
            existingUser.passwordHash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const accessToken = generateToken(existingUser);
        const refreshToken = await createRefreshTokenSession(existingUser);

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                id: existingUser._id,
                email: email,
                accessToken: accessToken,
                refreshToken: refreshToken,
            },
        });

    } catch (error) {
        next(error);
    }
};

export const profile = async (req, res, next) => {
    try {
        const user = req.user;

        return res.status(200).json({
            success: true,
            message: "User profile retrieved successfully",
            data: {
                id: user.id,
                email: user.email,
            },
        });

    } catch (error) {
        next(error);
    }
};

export const refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: "Refresh token is required",
            });
        }

        const decoded = await verifyRefreshTokenSession(refreshToken);

         const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        const accessToken = generateToken({
            _id: decoded.id,
            email: decoded.email,
        });

        return res.status(200).json({
            success: true,
            message: "Access token refreshed successfully",
            data: {
                accessToken,
            },
        });

    } catch (error) {
        console.error("Error in refresh token:", error);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired refresh token",
        });
    }
};