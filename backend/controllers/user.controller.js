import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isExists = await User.findOne({ username });
    if (isExists) {
      return res.status(500).json({ message: "User already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "Create Successfully" });
  } catch (err) {
    res.status(500).json({ message: "can not post user" });
    console.log("Error post user", err);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).json({ message: "Login Successfully", token });
  } catch (err) {
    res.status(500).json({ message: "Error login user" });
    console.log("Error login user", err);
  }
};

export { signup, login };
