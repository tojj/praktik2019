const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema

let userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  zipCode: { type: String, required: true },
  city: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordRepeat: { type: String, required: true },
  //event: { type: Schema.Types.ObjectId, ref: 'Event' }
})

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password + passwordSalt, 10);
})

module.exports = global.db.model("User", userSchema) 