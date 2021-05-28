const express = require('express')
const getAllAlbums = require('./controllers/albums')
const getDetails = require('./controllers/details')
const getAllSongs = require('./controllers/songs')

const app = express()

// app.use(express.static('public'))

app.get('/albums', getAllAlbums)
app.get('/details', getDetails)
app.get('/songs', getAllSongs)


app.all('*', (request, response) => {
  return response.sendStatus(400)
})

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
