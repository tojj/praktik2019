const mongoose = require("mongoose")
const Schema = mongoose.Schema

let qnaSchema = new Schema({
  question: { type: String, required: true },
  answer:   { type: String },
  counter:  { type: Number , default: 0 }
})

module.exports = global.db.model("Qna", qnaSchema)