const mongoose = require('mongoose')
// imports mongoose as mongoose.

const GifSchema = new mongoose.Schema({
  title: String,
  url: String
})
//creating Format For data to be taken from server. 

mongoose.model('gif', GifSchema)
// idetifies the GifSchema as the model, for my data.

module.exports = mongoose
// export this file for the rest of the applicaiton to access it. 
