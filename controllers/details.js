const models = require('../models')


const getDetails = async (request, response) => {
  const details = await models.Details.findOne({
  })

  return response.send(details)
}


module.exports = getDetails
