import { checkExistingUser , hashPassword, createUser} from "../services/auth.service.js";

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

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                email: email,
            },
        });

    } catch (error) {
        next(error);
    }
};