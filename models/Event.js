const mongoose = require("mongoose")
const Schema = mongoose.Schema

let eventSchema = new Schema({
  title:      { type: String, required: true },
  child:      { type: String, required: true },
  age:        { type: Number, required: true },
  image:      { type: String, required: true },
  desc:       { type: String, required: true },
  date:       { type: Number, required: true },
  location: { 
    street:   { type: String, required: true },
    zipcode:  { type: Number, required: true },
    city:     { type: String, required: true }
  },
  swish: {
    number:   { type: String, required: true },
    amount:   { type: Number, required: true }
  },
  donate:     { type: Boolean },
  product:    { type: Schema.Types.ObjectId, ref: 'Product' },
  fundraiser: { type: Schema.Types.ObjectId, ref: 'Fundraiser' },
  user:       { type: Schema.Types.ObjectId, ref: 'User' },
  link:         { type: String, unique: true, required: true }
})

module.exports = global.db.model("Event", eventSchema)