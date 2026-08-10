import { checkExistingUser , hashPassword, createUser} from "../services/auth.service.js";

export const register = async (req, res) => {
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
        console.error("Registration error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};