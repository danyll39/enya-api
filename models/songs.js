const Songs = (connection, Sequelize, Albums) => {
  return connection.define('songs', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    albumId: { type: Sequelize.INTEGER, references: { model: Albums, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = Songs


