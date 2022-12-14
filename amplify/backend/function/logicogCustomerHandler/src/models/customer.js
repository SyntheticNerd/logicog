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
        productInfo: {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          productName: {
            type: String,
            required: true,
          },
          productImage: {
            type: String,
            required: true,
          },
        },
        styleId: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  wishList: {
    items: [
      {
        productInfo: {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          productName: {
            type: String,
            required: true,
          },
          productImage: {
            type: String,
            required: true,
          },
        },
        styleId: {
          type: Schema.Types.ObjectId,
          required: true,
        },
      },
    ],
  },
  transactions: [
    {
      items: [
        {
          productInfo: {
            productId: {
              type: Schema.Types.ObjectId,
              ref: "Product",
              required: true,
            },
            productName: {
              type: String,
              required: true,
            },
            productImage: {
              type: String,
              required: true,
            },
          },
          styleId: {
            type: Schema.Types.ObjectId,
            required: true,
          },
          quantity: { type: Number, required: true },
        },
      ],
      date: { type: Schema.Types.Date, required: true },
      total: { type: Number, required: true },
      refunded: { type: Boolean, required: true, default: false },
    },
  ],
});

//TODO need an update cart
customerSchema.methods.addToCart = function (productInfo, styleId) {
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    return (
      cp.productInfo.productId.toString() === productInfo.productId.toString()
    );
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];
  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productInfo: productInfo,
      styleId: styleId,
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

customerSchema.methods.changeQuantity = function (productId, newQuantity) {
  //find item in cart
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    return cp.productInfo.productId.toString() === productId.toString();
  });
  console.log(cartProductIndex);
  let updatedCartItems = [...this.cart.items];
  if (cartProductIndex === undefined || cartProductIndex === null) {
    return new Error("Can not find item in cart");
  } else if (newQuantity <= 0) {
    //filter out items that are not the item with 0 quantity
    updatedCartItems = updatedCartItems.filter(
      (cartItem) =>
        cartItem.productInfo.productId.toString() !== productId.toString()
    );
    const updatedCart = {
      items: updatedCartItems,
    };
    this.cart = updatedCart;
    console.log("UPDATED CART", this.cart);
    return this.save();
  } else {
    updatedCartItems[cartProductIndex].quantity = newQuantity;
    const updatedCart = {
      items: updatedCartItems,
    };
    this.cart = updatedCart;
    console.log("UPDATED CART", this.cart);
    return this.save();
  }
};

//TODO Definitely want to rethink the multiple lambda functions or we need to pass prices to the cart items at creation
customerSchema.methods.checkout = function (total) {
  const updatedTransactions = [...this.transactions];
  const newTransaction = {
    items: this.cart.items,
    date: new Date(),
    total: total,
  };
  updatedTransactions.push(newTransaction);
  console.log(updatedTransactions);
  this.transactions = updatedTransactions;
  this.cart.items = [];
  console.log("UPDATED TRANSACTIONS");
  return this.save();
};

customerSchema.methods.addToWishList = function (productInfo, styleId) {
  const wishListProductIndex = this.wishList.items.findIndex((cp) => {
    return (
      cp.productInfo.productId.toString() === productInfo.productId.toString()
    );
  });
  let newQuantity = 1;
  const updatedWishListItems = [...this.wishList.items];
  if (wishListProductIndex >= 0) {
    return;
  } else {
    updatedWishListItems.push({
      productInfo: productInfo,
      styleId: styleId,
    });
  }
  const updatedWishList = {
    items: updatedWishListItems,
  };
  this.wishList = updatedWishList;
  console.log("UPDATED WISHLIST", this.wishList);
  return this.save();
};

customerSchema.methods.removeFromWishList = function (productId) {
  const wishListProductIndex = this.wishList.items.findIndex((cp) => {
    return cp.productInfo.productId.toString() === productId.toString();
  });
  console.log(wishListProductIndex);
  let updatedWishListItems = [...this.wishList.items];
  if (wishListProductIndex === undefined || wishListProductIndex === null) {
    return new Error("Can not find item in wishList");
  } else {
    //filter out items that are not the item with 0 quantity
    updatedWishListItems = updatedWishListItems.filter(
      (wishListItem) =>
        wishListItem.productInfo.productId.toString() !== productId.toString()
    );
    const updatedWishList = {
      items: updatedWishListItems,
    };
    this.wishList = updatedWishList;
    console.log("UPDATED CART", this.wishList);
    return this.save();
  }
};
//TODO add refund date
customerSchema.methods.refundTransaction = function (transactionId) {
  const transactionIndex = this.transactions.findIndex((cp) => {
    return cp._id.toString() === transactionId.toString();
  });
  console.log(transactionIndex);
  let updatedTransaction = [...this.transactions];
  if (transactionIndex === undefined || transactionIndex === null) {
    return new Error("Can not find Transaction");
  } else {
    updatedTransaction[transactionIndex].refunded = true;

    this.transactions = updatedTransaction;
    console.log("UPDATED TRANSACTION", this.transactions);
    return this.save();
  }
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
