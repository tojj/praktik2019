const mongoose = require("mongoose")
const Schema = mongoose.Schema

let productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  link: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true }
})

module.exports = global.db.model("Product", productSchema)