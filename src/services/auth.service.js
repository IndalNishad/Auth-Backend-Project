// import jwt from "jsonwebtoken";
// import {config} from "../config/env.js";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";


export const checkExistingUser = async (email) => {
    const existingUser = await User.findOne({ email });

    return existingUser;
};

export const hashPassword = async (password) => {
    
    const hashedPassword = await bcrypt.hash(password, 12);

    return hashedPassword;
};

export const createUser = async (email, passwordHash) => {
    const user = await User.create({
        email,
        passwordHash,
    });

    return user;
};

export const comparePassword = async (password, passwordHash) => {
    const isPasswordValid = await bcrypt.compare(
        password,
        passwordHash
    );

    return isPasswordValid;
};
