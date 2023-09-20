import { user } from "../models/user.js";
import bcrypt from "bcrypt"
export const register = async (req,res) => {
  try {
    const { name, email, password } = req.body;
    let newUser = await user.findOne({ email });
    if (newUser)
      res.status(404).json({
        success: false,
        message: "User already exist",
      });
    else {
      const hashedPassword = await bcrypt.hash(password, 10);

      newUser = await user.create({ name, email, password: hashedPassword });
      res.status(201).json({
        success: true,
        message: "registration successfull",
        email: newUser.email,
        id: newUser._id,
        name: newUser.name,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      meassage: error.message,
    });
  }
};

export const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const newUser = await user.findOne({ email }).select("+password");
    if (!newUser) {
      res.status(404).json({
        success: true,
        message: "Invalid email or password",
      });
    }
    const isMatched = await bcrypt.compare(password, newUser.password);
    if (!isMatched) {
      res.status(404).json({
        success: true,
        message: "Invalid email or password",
      });
    } else
      res.status(200).json({
        success: true,
        message: "login successfull",
        email: newUser.email,
        id: newUser._id,
        name: newUser.name,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      meassage: error,
    });
  }
};
