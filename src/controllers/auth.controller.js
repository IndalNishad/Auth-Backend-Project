export const register = async (req, res) => {
    try {
        const {email, password, confirmpassword } = req.body;

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                email,
                password,
                confirmpassword
            }
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}
