const mongoose = require('mongoose')
const { db_host } = require('./config/keys');


mongoose.connect(db_host, { useNewUrlParser: true })
global.db = mongoose.connection
db.on("error", () => reject("Could not connect to DB"))
db.once("open", () => {
  console.log('Connected to DB')
  importJsonDataToDb()
})



// Load Mongoose models
let Fundraiser = require('./models/Fundraiser')

// Load the json data from file
let fundraiserData = require('./data/fundraisers.json')

async function importJsonDataToDb() {
  let allFundraisersCount = await Fundraiser.count()
  // if the db already contains Fundraiser then delete them
  if (allFundraisersCount > 0) {
    console.log('Deleted old fundraisers', await Fundraiser.remove({}))
  }

  // creates Fundraisers
  for (let data of fundraiserData) {
    let fundraiser = new Fundraiser(data)
    await fundraiser.save()
  }
  // after the import count the Fundraisers again
  allFundraisersCount = await Fundraiser.count()
  console.log(`Imported ${allFundraisersCount} fundraisers to the database`)
  // Exit the app
  process.exit()
}
