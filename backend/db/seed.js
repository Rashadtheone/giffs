const mongoose = require('./connections')
const seeds = require('./seedData')
// establishes connection to see seedData, and connections.js file.

const Gif = mongoose.model('gif')
// set the model to the SCHEMA we set up earlier.

Gif.remove({}).then(_ => {
  console.log('dropped the db')
  // Shows the Database being cleared.
  Gif.collection.insert(seeds).then(seededEntries => {
      // this inserts data for seeds, and new data.
    console.log(seededEntries)
    mongoose.connection.close()
    // ends the connections
  })
})
