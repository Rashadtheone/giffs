const mongoose = require('./models/gif')
// Import mongoose instance that contains our config of our data.

mongoose.Promise = Promise
// identifying the application is going to expect mongoose, and return error if it doesn't

const mongoUri = 'mongodb://localhost/giff'
// set the uri to connecto to local mongo DBIn information technology, a Uniform Resource Identifier (URI) is a string of characters used to identify a resource. ... Schemes specifying a concrete syntax and associated protocols define each URI. The most common form of URI is the Uniform Resource Locator (URL), frequently referred to informally as a web address.

mongoose
    .connect(mongoUri, {useMongoClient: true})
    // connects database
    .then(connection => console.log(`All systems go master '${connection.db.databaseName}'`))
    // if it does connect the console will let me know.
    .catch(connectionError => console.log('connection failed!', connectionError))
    // error if it doesn't function properly.

module.exports = mongoose
