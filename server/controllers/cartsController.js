import Cart from "../models/Cart.js";

export const getCart = async (req, res, next) => {
  const cart = await Cart.findById(req.params.cartId).populate("items.record");
  res.status(200).json({
    success: true,
    message: "Cart Data",
    data: cart,
  });
};

export const addCartItem = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      { $push: { items: req.body } },
      { new: true }
    ).populate("items.record");

    res.status(200).json({
      success: true,
      message: "Cart Data",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      { $pull: { items: req.body } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Cart item deleted",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const updateItemField = async (req, res, next) => {
  try {
    const cart = await Cart;
  } catch (error) {
    next(error);
  }
};
