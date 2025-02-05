import express from "express";

import {
  register,
  login,
  logout,
  getMe,
} from "../controllers/usersController.js";

const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/logout", logout)
  .get("/me", getMe);

export default router;
