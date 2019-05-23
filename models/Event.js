const mongoose = require("mongoose")
const Schema = mongoose.Schema

let eventSchema = new Schema({

  title:      { type: String, required: true },
  child:      { type: String, required: true },
  age:        { type: Number, required: true },
  image:      { type: String, required: true },
  desc:       { type: String, required: true },
  date:       Number,
  rsvp:       Number,
  location: { 
    street:   { type: String, required: true },
    zipcode:  { type: String, required: true },
    city:     { type: String, required: true }
  },
  swish: {
    number:   { type: String, required: true },
    amount:   { type: String, required: true },
    color:    { type: String, required: true },

  },
  donate:     { type: Boolean },
  attending:  { type: Array },
  invited:    { type: Array },
  product:    { type: Schema.Types.ObjectId, ref: 'Product' },
  fundraiser: { type: Schema.Types.ObjectId, ref: 'Fundraiser' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  link: { type: String, unique: true, required: true },

  guestUser: {
    firstName:   { type: String, required: true},
    lastName:    { type: String, required: true},
    email:       { type: String, required: true},
    phoneNumber: { type: String},
    address:      { type: String, required: true},
    zipcode:     { type: String, required: true},
    city:        { type: String, required: true},
  }
})

module.exports = global.db.model("Event", eventSchema)