import express from "express";
import { login } from "../controllers/authController.js";
import { createUser } from "../controllers/userController.js";
import upload from "../middlewares/uploadImage.js";


const router=express.Router()

router.post('/login',login)
router.post('/signup',upload.any(),createUser)

export default router;