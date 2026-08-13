import jwt from "jsonwebtoken";
import { config } from "../config/env.js";
import bcrypt from "bcrypt";


export const generateToken = (user) => {
    const token = jwt.sign(
        { id: user._id, email: user.email },
        config.JWT_SECRET,
        { expiresIn: "15m" }
    );

    return token;
}

export const generateRefreshToken = (user) => {
    const refreshToken = jwt.sign(
        { id: user._id, email: user.email },
        config.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
    );

    return refreshToken;
};

export const hashRefreshToken = async (refreshToken) => {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);

    return hashedRefreshToken;
};

export const verifyRefreshToken = (refreshToken) => {
    try {
        const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
        return decoded;
    } catch (error) {
        throw new Error("Invalid refresh token");
    }
};