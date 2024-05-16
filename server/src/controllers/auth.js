import { User } from "../db/User.js";
import { hashPassword, comparePassword } from "../utils/auth.utils.js";
import JWT from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password, answer } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(500).json({
        message: "User Already Exist",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      answer,
    });
    console.log(newUser);
    return res.status(201).json({
      message: "User Created Successfully",
      success: true,
      data: newUser,
    });
  } catch (error) {
    return res.status(501).json({
      message: "Internal Server Error",
      success: false,
      data: null,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(500).json({
        message: "User Doesn't Exist",
        success: false,
        data: null,
      });
      return;
    }
    const isMatch = await comparePassword(password, user.password);
    // console.log(isMatch);
    if (!isMatch) {
      res.status(400).json({
        message: "Wrong Password",
        success: false,
      });
      return;
    }
    const token = await JWT.sign(
      { _id: user._id },
      process.env.AUTH_SECRET_KEY,
      { expiresIn: "7d" }
    );
    // console.log(token);

    return res.status(201).json({
      message: "Logged in Successfully",
      success: true,
      user,
      token,
    });
  } catch (error) {
    // console.log(error);
    return res.status(501).json({
      message: "Internal Server Error",
      success: false,
      data: null,
      error,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email, answer, newPassword, confirmPassword } = req.body;
    // console.log(email, answer, newPassword, confirmPassword);
    const user = await User.findOne({ email });
    // console.log(user);
    if (user.answer != answer) {
      return res.status(500).json({
        message: "Answer not matched",
        success: false,
        data: null,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(500).json({
        message: "Password not matched",
        success: false,
        data: null,
      });
    }

    const hashed = await hashPassword(newPassword);
    // console.log(hashed);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
      newPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error,
    });
  }
};
