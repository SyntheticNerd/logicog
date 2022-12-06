//* API Endpoint: https://13713ult3b.execute-api.us-west-1.amazonaws.com/dev

const express = require("express");
const session = require("express-session");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const MongoDBStore = require("connect-mongo");
// const MongoDBStore = require("connect-mongodb-session")(session);

const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const Customer = require("./models/customer");

// declare a new express app
const app = express();
const store = MongoDBStore.create({
  mongoUrl: `mongodb+srv://admin:${process.env.MONGO_PW}@cluster0.nws27lc.mongodb.net/customers?retryWrites=true&w=majority`,
  collectionName: "session",
  // collection: "session",
});
// const store = new MongoDBStore({
//   uri: `mongodb+srv://admin:${process.env.MONGO_PW}@cluster0.nws27lc.mongodb.net/customers?retryWrites=true&w=majority`,
//   collection: "session",
// });

app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const expirationTime = 1000 * 60 * 30;

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    // maxAge: expirationTime,
    // expires: new Date(Date.now() + expirationTime),
    cookie: {
      maxAge: expirationTime,
    },
  })
);

app.use(async (req, res, next) => {
  const sid = req.body.sid;
  console.log("SID", sid);
  if (sid !== undefined && sid) {
    ////check if session has expired
    store.get(sid, (error, session) => {
      if (!session || session === undefined) {
        console.log("ERROR", error);
        console.log("No Session Found");
        return next();
      } else {
        console.log("SESSION", session);
        console.log("EXPIRES", session.cookie.expires);
        store.touch(sid, req.session, (err) => {
          return err;
        });
        //! Can not set the entire session all at once gives touch method error
        req.session.customer = session.customer;
        // req.session.cookie = session.cookie;

        console.log("IDS", req.sessionID, req.session.id);
        //TODO convert to try catch
        //? not entirely sure why i am doing this anymore
        //? is it so the schema works right
        Customer.findById(req.session.customer._id)
          .then((customer) => {
            req.customer = customer;
            return next();
          })
          .catch((err) => {
            console.log(err);
            //? should i actually return next here
            return next();
          });
      }
    });
  } else {
    return next();
  }
});

app.get("/customers", async function (req, res) {
  // Add your code here
  res.json({
    success: "get call succeed!",
    url: req.url,
    db: await Customer.fetchAll(),
  });
});

app.post("/customers/current", function (req, res) {
  // Add your code here
  if (req.customer) {
    req.session.destroy();
    res.json({
      //! Populate will not work for products, maybe if we combine lambda functions
      customer: req.customer,
    });
  } else {
    req.session.destroy();
    res.json({ message: "No customer logged In" });
  }
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
  //find the customer
  const customer = await Customer.findOne({ email });
  if (!customer) {
    console.log("No customer found");
    return res.json({ error: "No Customer found" });
  }
  console.log("FOUND CUSTOMER", customer);
  try {
    //test password
    const match = await bcrypt.compare(password, customer.password);
    if (match) {
      //logged in
      //generate session info
      // req.session.isLoggedIn = true;
      req.session.customer = customer;
      //save session
      req.session.save((err) => {
        console.log(err);
      });
      //TODO encrypt session id maybe, should be the only thing exposed to front end
      res.json({
        success: match,
        session: req.session,
        sid: req.session.id,
        expires: req.session.cookie.expires,
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
  //I wish i could verrify that the product exists but I dont have access to the Product
  //schema should have done everything under one lambda function
  //TODO move everything to one lambda function
  const prodId = req.body.productId;
  const styleId = req.body.styleId;
  //at this point pray we have proper session data
  console.log("CUSTOMER", req.customer);
  console.log("SESSION", req.session);
  //have to return or else we get a unhandled promise rejection

  try {
    const response = await req.customer.addToCart(prodId, styleId);
    console.log("Past addToCart", res);
    req.session.customer = req.customer;
    store.set(req.body.sid, req.session);
    req.session.destroy();
    return res.json({
      success: "Added item to cart",
      productId: prodId,
      response: response,
      customer: req.customer,
    });
  } catch (err) {
    console.log("Error", err);
    return res.json({ error: "Could not add to cart." });
  }
});

app.post("/customers/updateCartQuantity", async (req, res) => {
  const { productId, newQuantity } = req.body;
  try {
    const response = await req.customer.changeQuantity(productId, newQuantity);
    req.session.customer = req.customer;
    store.set(req.body.sid, req.session);
    req.session.destroy();
    return res.json({
      success: "Updated Cart quantity",
      productId: productId,
      response: response,
      customer: req.customer,
    });
  } catch (err) {
    console.log("Error", err);
    return res.json({ error: "Could not update." });
  }
});

app.post("/customers/log-out", async (req, res) => {
  const { sid } = req.body;
  try {
    console.log("DESTROYING SESSION", sid);
    store.destroy(sid, (err) => {
      if (err) {
        console.log("Can not destroy that session");
        req.session.destroy();
        return res.json({ error: err });
      } else {
        req.session.destroy();
        return res.json({ success: "User Logged Out" });
      }
    });
  } catch (err) {
    req.session.destroy();
    return res.json({ error: err });
  }
});

app.listen(3000, function () {
  console.log("App starting");
});
module.exports = app;
