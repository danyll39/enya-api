const models = require('../models')


const getAllAlbums = async (request, response) => {
  const albums = await models.Albums.findAll({
  })

  return response.send(albums)
}




module.exports = getAllAlbums
