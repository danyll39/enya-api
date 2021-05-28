const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')

const AlbumsModel = require('./albums')
const DetailsModel = require('./details')
const SongsModel = require('./songs')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const Albums = AlbumsModel(connection, Sequelize)
const Details = DetailsModel(connection, Sequelize)
const Songs = SongsModel(connection, Sequelize)

Songs.belongsTo(Albums)
Albums.hasMany(Songs)

// Details.belongsTo(Songs)

module.exports = {
  Albums,
  Details,
  Songs,
  Sequelize,
}
