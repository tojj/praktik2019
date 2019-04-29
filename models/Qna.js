const mongoose = require("mongoose")
const Schema = mongoose.Schema

let qnaSchema = new Schema({
  question: { type: String, required: true },
  answer:   { type: String, required: true },
  counter:  { type: Number, required: true , default: 0 }
})

module.exports = global.db.model("Qna", qnaSchema)