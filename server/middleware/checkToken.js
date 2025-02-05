import jwt from "jsonwebtoken";
import User from "../models/User.js";
import createError from "http-errors";

const checkToken = async (req, res, next) => {
  try {
    const jwtToken = req.cookies.jwtToken;

    if (!jwtToken) throw createError(401, "Unauthorized request");

    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const user = await User.findById({ _id: decoded.id });

    if (!user) throw createError(401, "User is no longer exist");

    req.user = user; // To be explain in depth when implementing keeping user logged in after regreshing the page

    next();
  } catch (error) {
    next(error);
  }
};

export default checkToken;
