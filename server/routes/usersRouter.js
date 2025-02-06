import express from "express";
import {
  login,
  register,
  logout,
  updateUser,
  getMe,
} from "../controllers/usersController.js";
import checkToken from "../middleware/checkToken.js";

const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/logout", logout)
  .patch("/update/:id", updateUser)
  .get("/me", checkToken, getMe);

export default router;
