const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:${process.env.MONGO_PW}@cluster0.nws27lc.mongodb.net/products?retryWrites=true&w=majority`
  );
  console.log("Connecting to MongoDB");
  if (!client) {
    console.log("No client");
    throw new Error("Not connecting to client");
  }
  _db = client.db();
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  console.log("No DB");
  throw new Error("No DB");
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
