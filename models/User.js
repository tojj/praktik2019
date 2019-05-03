const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  zipCode: { type: Number, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordRepeat: { type: String, required: true },
  //event: { type: Schema.Types.ObjectId, ref: 'Event' }
})

module.exports = global.db.model("User", userSchema)