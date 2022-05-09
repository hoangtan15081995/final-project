const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const {
  addProductToCart,
  getListProductsCart,
} = require("../controllers/cart.controller");
const { loginRequired } = require("../middlewares/authentication");
const { validate, checkObjectId } = require("../middlewares/validator");

router.post(
  "/add",
  loginRequired,
  validate([body("productId").exists().isString().custom(checkObjectId)]),
  addProductToCart
);

router.get("/list", loginRequired, getListProductsCart);
module.exports = router;
