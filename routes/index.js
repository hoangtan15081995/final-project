const express = require("express");
const router = express.Router();

const userRouter = require("./users.api");
router.use("/users", userRouter);

const productRouter = require("./products.api");
router.use("/products", productRouter);

const cartRouter = require("./carts.api");
router.use("/carts", cartRouter);

module.exports = router;
