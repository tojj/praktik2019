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
let Product = require('./models/Product')

// Load the json data from file
let productData = require('./data/Products.json')

async function importJsonDataToDb() {
  let allProductsCount = await Product.count()
  // if the db already contains Product then delete them
  if (allProductsCount > 0) {
    console.log('Deleted old Products', await Product.remove({}))
  }

  // creates Products
  for (let data of productData) {
    let product = new Product(data)
    await product.save()
  }
  // after the import count the Products again
  allProductsCount = await Product.count()
  console.log(`Imported ${allProductsCount} Products to the database`)
  // Exit the app
  process.exit()
}
