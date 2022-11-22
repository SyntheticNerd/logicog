//* API Endpoint: https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const Customer = require("./models/customer");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/customers", async function (req, res) {
  // Add your code here
  res.json({
    success: "get call succeed!",
    url: req.url,
    db: await Customer.fetchAll(),
  });
});

app.get("/customers/:customerId", function (req, res) {
  // Add your code here
  res.json({
    success: `${req.params.customerId} is being accessed`,
    url: req.url,
  });
});

app.get("/customers/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.post("/customers", async function (req, res) {
  const { firstName, lastName, email, password } = req.body;
  let newCustomer = new Customer(firstName, lastName, email, password);
  let status = await newCustomer.save();
  res.json({
    success: "post call succeed!",
    url: req.url,
    body: req.body,
    status: status,
  });
});

app.post("/customers/*", function (req, res) {
  // Add your code here

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/customers", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/customers/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/customers", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/customers/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App starting");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
