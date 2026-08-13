import bcrypt from "bcrypt";
import RefreshToken from "../models/refreshToken.model.js";

import {
    generateRefreshToken,
    hashRefreshToken,
    verifyRefreshToken,
} from "./token.service.js";

export const createRefreshTokenSession = async (user) => {
    const refreshToken = generateRefreshToken(user);

    const tokenHash = await hashRefreshToken(refreshToken);

    const expiresAt = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
    );

    await RefreshToken.create({
        userId: user._id,
        tokenHash,
        expiresAt,
    });

    return refreshToken;
};
export const verifyRefreshTokenSession = async (refreshToken) => {
    console.log("1. Refresh token received");

    const decoded = verifyRefreshToken(refreshToken);
    console.log("2. JWT verified");

    const existingSession = await RefreshToken.findOne({
        userId: decoded.id,
        expiresAt: { $gt: new Date() },
    });

    console.log(
        "3. Session:",
        existingSession ? "FOUND" : "NOT FOUND"
    );

    if (!existingSession) {
        throw new Error("Refresh token session not found or expired");
    }

    const isValid = await bcrypt.compare(
        refreshToken,
        existingSession.tokenHash
    );

    console.log("4. Token comparison:", isValid);

    if (!isValid) {
        throw new Error("Invalid refresh token");
    }

    return decoded;
};