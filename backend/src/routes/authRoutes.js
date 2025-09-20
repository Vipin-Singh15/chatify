import express from "express";
import { signup, login, logout, updateProfile } from "../controllers/authController.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)
router.put("/update-profile", protectRoute, updateProfile)  // protectRoute, a middleware here only update if it's authenticated, first protectRoute function will be called

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user)) // to authenticate
export default router;
