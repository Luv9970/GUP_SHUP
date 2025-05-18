import express from "express"
import { login } from "../Controllers/user.controller.js";

const router = express.Router();

router.get('/login',login)

export default router;





