const Albums = (connection, Sequelize) => {
  return connection.define('albums', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    year: { type: Sequelize.INTEGER, allowNull: false },
  }, {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = Albums



