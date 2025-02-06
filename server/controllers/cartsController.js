import Cart from "../models/Cart.js";

const successHandler = (res, status, data) => {
  const response = {
    results: data.length,
    success: true,
    status,
    data,
  };
  res.status(status).json(response);
};

//! Get cart document
export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.cartId).populate(
      "items.record"
    );
    res.status(200).json({
      success: true,
      message: "Cart Data",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

//! Add a record to the cart
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

//! Delete one item from the items array in the cart document
export const deleteCartItem = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      { $pull: { items: req.body } },
      { new: true }
    ).populate("items.record");

    res.status(200).json({
      success: true,
      message: "Cart item deleted",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

//! Update one field (quantity) in the items array in the cart document
export const updateItemField = async (req, res, next) => {
  try {
    const { record, quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      { $set: { "items.$[item].quantity": quantity } },
      { arrayFilters: [{ "item.record": record }], new: true }
    ).populate("items.record");

    res.status(200).json({
      success: true,
      message: "Updated",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
