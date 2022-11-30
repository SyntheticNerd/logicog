const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const styleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  styles: {
    type: [styleSchema],
    required: true,
  },
  powerDelivery: {
    type: String,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  width: {
    type: Number,
    required: false,
  },
  depth: {
    type: Number,
    required: false,
  },
  warranty: {
    type: String,
    required: false,
  },
  primarySpecs: {
    type: [String],
    required: false,
  },
  technicalSpecs: {
    type: [String],
    required: false,
  },
  tracking: {
    type: [String],
    required: false,
  },
  requirements: {
    type: [String],
    required: false,
  },
  platforms: {
    type: [String],
    required: false,
  },
  inBox: {
    type: [String],
    required: false,
  },
});

module.exports = mongoose.model("Product", productSchema);
