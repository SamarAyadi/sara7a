import { messageModel } from "../../database/models/message.model.js";

import jwt from "jsonwebtoken";


const addMsg = async (req, res) => {
  const { message, receivedId } = req.body;
  await messageModel.insertMany({ message, receivedId });
  res.json({ message: "success" });
};

const getUserMsg = async(req, res) => {

  const messages = await messageModel.find({ receivedId: req.userId });
    res.json({ message: "success", messages });
};

export { addMsg, getUserMsg };
