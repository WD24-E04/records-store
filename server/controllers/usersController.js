import createError from "http-errors";

import { createSendToken } from "../utils/jwt.js";
import User from "../models/User.js";
import Cart from "../models/Cart.js";

const createCart = async (user) => {
  const newCart = await Cart.create({});
  user.cartId = newCart._id;
  await user.save();
};

export const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    await createCart(user);
    createSendToken(res, 201, user);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw createError(400, "Please provide email and password");
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.isPasswordCorrect(password, user.password))) {
      throw createError(401, "Incorrect email or password");
    }

    createSendToken(res, 200, user);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("jwtToken", { httpOnly: true });

    res.status(200).json({
      success: true,
      status: 200,
      data: "User was successfully logged out",
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const { data, isAuthenticated } = req;

    res.status(200).json({
      success: true,
      data,
      isAuthenticated,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { password } = req.body;
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, { password }, { new: true });
    res.status(200).json({ message: "Update success", data: user });
  } catch (error) {
    next(error);
  }
};
