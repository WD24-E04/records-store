import express from "express";

import {
  register,
  login,
  logout,
  getMe,
} from "../controllers/usersController.js";
import checkToken from "../middleware/checkToken.js";

const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/logout", checkToken, logout)
  .get("/me", checkToken, getMe);
  

export default router;
