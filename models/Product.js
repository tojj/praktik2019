const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String },
  link: { type: String },
  image: { type: String, required: true, unique: true },

});

module.exports = global.db.model("Product", productSchema);