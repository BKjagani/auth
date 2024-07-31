import Quote from "../models/quote.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const postquote = async (req, res) => {
  try {
    const { quote, writtenBy } = req.body;
    const newQuote = new Quote({ quote, writtenBy });
    await newQuote.save();
    res.status(201).json({ message: "Quote Created" });
  } catch (err) {
    req.status(500).json({ message: "Error post user" });
    console.log("Error post quote", err);
  }
};

const getquote = async (req, res) => {
  try {
    const token = req.headers["x-access-token"]
    if(!token){
        return res.status(401).json({message : "Token not provided"})
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    const id = decode.id
    const quoteList = await Quote.find({writtenBy : id});
    res.status(200).json({ message: "get successfully", quoteList });
  } catch (err) {
    req.status(500).json({ message: "Error get user" });
    console.log("Error get quote", err);
  }
};

export { postquote, getquote };
