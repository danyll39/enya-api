const Details = (connection, Sequelize) => {
  return connection.define('details', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    dob: { type: Sequelize.STRING, allowNull: false },
    genres: { type: Sequelize.STRING, allowNull: false },
    bornIn: { type: Sequelize.STRING, allowNull: false }
  }, {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = Details

