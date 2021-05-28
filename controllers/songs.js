const models = require('../models')

const getAllSongs = async (request, response) => {
  const songs = await models.Songs.findAll({
  })

  return response.send(songs)
}

module.exports = getAllSongs
