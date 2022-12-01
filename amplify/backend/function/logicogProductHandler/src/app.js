/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const fs = require("fs");

const { getDB } = require("./utils/database");
const Product = require("./models/product");

// Create uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
// if (!fs.existsSync("./uploads")) {
//   fs.mkdirSync("./uploads");
// }

// // Multer setup
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// declare a new express app
const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

// app.use(express.static(__dirname + "/public"));
// app.use("/uploads", express.static("uploads"));

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/products", async function (req, res) {
  Product.find().then((products) => res.json(products));
});

app.get("/products/:productId", async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.find(productId);
});

app.post("/products", async function (req, res) {
  console.log("Creating product");
  console.log(req.body);

  const product = new Product(req.body);
  console.log("PRODUCT", product);
  try {
    let status = await product.save();
    res.json({
      success: "post call succeed!",
      url: req.url,
      body: req.body,
      status: status,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: "Failed to saver",
    });
  }
});

app.post("/products/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/products", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/products/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/products", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/products/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
