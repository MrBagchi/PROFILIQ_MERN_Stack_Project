import { Router } from "express";
import { forgotPassword, login, signup } from "../controllers/auth.js";

//authentication endpoints
const router = Router();
router.post("/login", login);
router.post("/signup", signup);
router.post("/forgotpassword", forgotPassword);

export default router;
