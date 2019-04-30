const mongoose = require("mongoose")
const Schema = mongoose.Schema

let qnaSchema = new Schema({
  question: { type: String, required: true },
  answer:   { type: String },
  counter:  Number
})

module.exports = global.db.model("Qna", qnaSchema)