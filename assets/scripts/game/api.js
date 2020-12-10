'use strict'
const config = require('./../config')
const store = require('./../store')

const newGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/game',
    method: 'POST',
    data: {}
  })
}
module.exports = {
  newGame
}
