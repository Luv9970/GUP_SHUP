import express from "express"
import { isAuthenticated } from "../Middlewares/auth.middleware.js";
import { getMessages, sendMessage } from "../Controllers/message.controller.js";

const router = express.Router();

router.post('/send/:receiverId', isAuthenticated, sendMessage)
router.get('/get-messages/:otherparticipantId', isAuthenticated, getMessages)


export default router;





