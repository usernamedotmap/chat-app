import Conversation from "../models/converstion.js";
import Message from "../models/message.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    /// socket IO dito ah

    const receiverSockedId = getReceiverSocketId(receiverId);
    if (receiverSockedId) {
      // use this para ma-send ang events sa specific na user, it means kung sino yang receiver id na yan na user
      io.to(receiverSockedId).emit("newMessage", newMessage)
    }


    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in mesage to ah", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");


    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(conversation.messages)
  } catch (error) {
    console.log("Errinr in get meesgga", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
