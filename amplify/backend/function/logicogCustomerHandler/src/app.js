//* API Endpoint: https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev

const express = require("express");
const session = require("express-session");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const MongoDBStore = require("connect-mongodb-session")(session);

const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const Customer = require("./models/customer");
const { runInNewContext } = require("vm");

// declare a new express app
const app = express();
const store = new MongoDBStore({
  uri: `mongodb+srv://admin:${process.env.MONGO_PW}@cluster0.nws27lc.mongodb.net/customers?retryWrites=true&w=majority`,
  collection: "session",
});

app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  const ssid = req.body.ssid;
  console.log("SSID", ssid);
  store.get(ssid, (error, session) => {
    console.log("ERROR", error);
    console.log("SESSION", session);
  });
  if (!req.session.customer) {
    console.log("No Session Found");
    return next();
  }
  console.log(req.session.customer);
  Customer.findById(req.session.customer._id)
    .then((customer) => {
      req.customer = customer;
      next();
    })
    .catch((err) => console.log(err));
});

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

app.post("/customers/sign-up", async function (req, res) {
  const { firstName, lastName, email, password } = req.body;
  //Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log("In sign up");

  const customer = new Customer({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    cart: { items: [] },
  });
  console.log("CUSTOMER", customer);
  let status = await customer.save();
  res.json({
    success: "post call succeed!",
    url: req.url,
    body: req.body,
    status: status,
  });
});

app.post("/customers/login", async function (req, res) {
  const { email, password } = req.body;
  const customer = await Customer.findOne({ email });
  if (!customer) {
    return res.json({ error: "No Customer found" });
  }
  console.log(customer);
  try {
    const match = await bcrypt.compare(password, customer.password);
    console.log(match);
    if (match) {
      //logged in
      req.session.isLoggedIn = true;
      req.session.customer = customer;
      req.session.save((err) => {
        console.log(err);
      });
      res.setHeader("Set-Cookie", "loggedIn=true");
      res.json({
        success: match,
        session: req.session,
        idOne: req.session.id,
        idTwo: req.sessionID,
      });
    } else {
      res.json({ success: false, message: "Incorrect password." });
    }
  } catch (err) {
    console.log(err);
    res.json({ error: "Could not login" });
  }
});

app.post("/customers/add-to-cart", async function (req, res) {
  // Add your code here
  const prodId = req.body.productId;
  console.log("CUSTOMER", req.customer);
  console.log("SESSION", req.session);
  try {
    const res = await req.session.customer.addToCart(prodId);
    console.log("Past addToCart", res);
    res.json({
      success: "Added item to cart",
      productId: prodId,
      response: res,
    });
  } catch (err) {
    console.log("Error", err);
    res.json({ error: "Could not add to cart." });
  }
});


app.listen(3000, function () {
  console.log("App starting");
});
module.exports = app;
