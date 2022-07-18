import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

// public routes
router.post("/user/auth/register", UserController.userRegister);
router.post("/user/auth/login", UserController.userLogin);

// protected routes

export default router;
