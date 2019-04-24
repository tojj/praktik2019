const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
  firstName:      { type: String, required: true },
  lastName:       { type: String, required: true },
  email:          { type: String, required: true, unique: true },
  password:       { type: String, required: true },
  event:         { type: Schema.Types.ObjectId, ref: 'Event'},
  address:        { type: String, required: true },
  personalNumber: { type: Number, required: true }
})

module.exports = global.db.model("User", userSchema)