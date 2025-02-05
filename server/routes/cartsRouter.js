import express from "express";
import {
  getCart,
  addCartItem,
  deleteCartItem,
} from "../controllers/cartsController.js";
import checkToken from "../middleware/checkToken.js";

const router = express.Router();

router.use(checkToken);

router.get("/:cartId", getCart);
router.post("/:cartId/add", addCartItem);
router.patch("/:cartId/update");
router.delete("/:cartId/delete", deleteCartItem);

export default router;
