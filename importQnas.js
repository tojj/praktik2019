const mongoose = require('mongoose')
const supersecret = require('./supersecret')


mongoose.connect(supersecret, { useNewUrlParser: true })
global.db = mongoose.connection
db.on("error", () => reject("Could not connect to DB"))
db.once("open", () => {
  console.log('Connected to DB')
  importJsonDataToDb()
})



// Load Mongoose models
let Qna = require('./models/Qna')

// Load the json data from file
let qnaData = require('./data/FAQ.json')

async function importJsonDataToDb() {
  let allQnaCount = await Qna.count()
  // if the db already contains Qnas then delete them
  if (allQnaCount > 0) {
    console.log('Deleted old qnas', await Qna.remove({}))
  }

  // creates Qnas
  for (let data of qnaData) {
    let qna = new Qna(data)
    await qna.save()
  }
  // after the import count the Qnas again
  allQnasCount = await Qna.count()
  console.log(`Imported ${allQnasCount} qnas to the database`)
  // Exit the app
  process.exit()
}