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
// exports all of seed data too root location.
Router.get('/:title', (req, res) => {
  Gif
      .findOne({title: req.params.title})
      .then(gifs => res.json(gifs))
})
// finds databse of gif, creates new and reutnrs all of it

Router.post('/', (req, res) => {
  Gif
      .create(req.body)
      .then(() => {
        Gif
        .find({})
        .then(gifs => res.json(gifs))
      })
})
// finds databse of gif, creates new and reutnrs all of it
Router.put('/:title', (req, res) => {
  Gif
    .findOneAndUpdate({title: req.params.title}, req.body)
    .then(gifs => res.json(gifs))
})
Router.delete('/:title', (req, res) => {
  Gif
      .findOneAndRemove({ title: req.params.title })
      .then(gifs => res.json(gifs))
})
//  allows you to update the files
module.exports = Router
