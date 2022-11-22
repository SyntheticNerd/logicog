const { getDB } = require("../utils/database");

class Customer {
  constructor(firstName, lastName, email, password, cart, transactions) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.cart = cart ? cart : [];
    this.transactions = transactions ? transactions : [];
  }

  async save() {
    const db = getDB();
    try {
      let res = await db.collection("customers").insertOne(this);
      console.log(res);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  static async fetchAll() {
    let db = getDB();
    return await db.collection("customers").find().toArray();
  }
}

module.exports = Customer;
