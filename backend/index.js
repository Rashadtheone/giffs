const express = require('express')
const app = express()
const gifsController = require('./controllers/gifs')
const parser = require('body-parser')
const cors = require('cors')

app.use(cors())

const PORT = 3000

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

app.use('/gifs', gifsController)

app.listen(PORT, () => console.log(`live on port ${PORT}`))
