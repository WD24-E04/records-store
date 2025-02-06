import express from "express";
import {
  addCartItem,
  deleteCartItem,
  getCart,
  updateItemField,
} from "../controllers/cartsController.js";

const router = express.Router();

router.get("/:cartId", getCart);
router.post("/:cartId/add", addCartItem);
router.patch("/:cartId/update", updateItemField);
router.put("/:cartId/remove", deleteCartItem);
export default router;
