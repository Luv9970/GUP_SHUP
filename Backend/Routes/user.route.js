import express from "express"
import { getProfile, login, register } from "../Controllers/user.controller.js";
import { isAuthenticated } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.get('/get-profile', isAuthenticated , getProfile)

export default router;





