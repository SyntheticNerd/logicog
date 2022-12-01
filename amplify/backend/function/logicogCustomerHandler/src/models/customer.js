const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

customerSchema.methods.addToCart = function(productId) {
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    return cp.productId.toString() === productId.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];
  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: productId,
      quantity: newQuantity,
    });
  }
  const updatedCart = {
    items: updatedCartItems,
  };
  this.cart = updatedCart;
  console.log("UPDATED CART", this.cart);
  return this.save();
};

module.exports = mongoose.model("Customer", customerSchema);

// const { getDB } = require("../utils/database");

// class Customer {
//   constructor(firstName, lastName, email, password, cart, transactions) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//     this.cart = cart ? cart : [];
//     this.transactions = transactions ? transactions : [];
//   }

//   async save() {
//     const db = getDB();
//     try {
//       let res = await db.collection("customers").insertOne(this);
//       console.log(res);
//       return true;
//     } catch (err) {
//       console.log(err);
//       return false;
//     }
//   }

//   static async fetchAll() {
//     let db = getDB();
//     return await db.collection("customers").find().toArray();
//   }

//   static async findOne() {

//   }
// }

// module.exports = Customer;
