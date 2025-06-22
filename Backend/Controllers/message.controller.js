import Message from "../Models/message.model.js";
import Conversation from "../Models/conversation.model.js";
import { errorMiddleware } from "../Middlewares/error.middleware.js";
import { asyncHandler } from "../Utilities/asyncHandler.utility.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
  const senderId = req.user.id;
  const receiverId = req.params.receiverId;
  const message = req.body.message;

//   console.log(senderId, receiverId, message);

  if (!senderId || !receiverId || !message) {
    return next(new errorMiddleware("All fields are required", 400));
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  })

  if (!conversation){
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    message,
  });

  if(newMessage){
    conversation.messages.push(newMessage._id);
    await conversation.save();
  }

  res.status(200).json({
    success: true,
    responseData: newMessage,
  });
});

export const getMessages = asyncHandler(async (req, res, next) => {
  const myId = req.user.id;
  const otherparticipantId = req.params.otherparticipantId;


  if (!myId || !otherparticipantId) {
    return next(new errorMiddleware("All fields are required", 400));
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [myId, otherparticipantId] },
  }).populate("messages");

  res.status(200).json({
    success: true,
    responseData: conversation,
  });
});
