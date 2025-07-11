import express from "express";
import {register,login,getProfile,logout,fetchLeaderboard} from "../controllers/userController.js";
const router = express.Router();
import { isAuthenticated } from "../middlewares/auth.js";


router.post("/register", register);
router.post("/login", login);
router.get("/me",isAuthenticated, getProfile);
router.get("/logout",isAuthenticated, logout);
router.get("/leaderboard", fetchLeaderboard);

export default router;