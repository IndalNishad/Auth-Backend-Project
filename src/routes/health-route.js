import { Router } from "express";


const router = Router();

router.get('/', (req, res) => {
    console.log("Health check endpoint hit");

    res.status(200).json({
        status: "OK",
        success: true,
        message: "Server is running fine",
    });

    console.log("Health check response sent");
});

export default router;