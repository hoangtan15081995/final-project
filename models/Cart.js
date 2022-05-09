const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
    products: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 0 },
      },
    ],
  },
  {
    timestamps: true, //CreatedAt & UpdatedAt
  }
);

const Cart = mongoose.model("Carts", cartSchema);
module.exports = Cart;
