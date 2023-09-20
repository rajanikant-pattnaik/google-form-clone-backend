import express from "express";
import { login, register } from "../controllers/user.js";
const router=express.Router();

router.post('/users/new',register)
router.post('/users/login',login)

export default router;