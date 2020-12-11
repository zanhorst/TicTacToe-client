'use strict'
const store = require('./../store')

const newGameSuccess = function (event) {
  $('#message').text('Game created.')
  $('#game-board').show()
  console.log(event)
  store.game = event.game
}
const newGameFailure = function (error) {
  $('#message').text('Game could not be created. Error: ' + error.responseJSON.message)
  console.log(error)
}
const updateGameSuccess = function (event) {
  $('#message').text('Move successful.')
}
module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess
}
