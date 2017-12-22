const express = require('express')
const Router = express.Router()
// create Router class to allow paths to be set.

const mongoose = require('../db/connections')
// establishes connection

const Gif = mongoose.model('gif')
// sets the model again.

// exports to router

Router.get('/', (req, res) => {
  Gif
    .find({})
    .then(gifs => res.json(gifs))
})

Router.post('/', (req, res) => {
  Gif
      .create(req.body)
      .then(() => {
        Gif
        .find({})
        .then(gifs => res.json(gifs))
      })
})
module.exports = Router
