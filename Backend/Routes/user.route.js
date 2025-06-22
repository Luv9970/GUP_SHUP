import express from "express"
import { getProfile, login, register, logout, getOtherUsers } from "../Controllers/user.controller.js";
import { isAuthenticated } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.post('/logout', isAuthenticated , logout )
router.get('/get-profile', isAuthenticated , getProfile)
router.get('/get-other-users', isAuthenticated , getOtherUsers)

export default router;





