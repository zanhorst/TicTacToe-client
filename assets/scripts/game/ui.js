'use strict'
const store = require('./../store')
// const events = require('./events')
const newGameSuccess = function (response) {
  $('#message').text('Game created.')
  $('#game-board').show()
  console.log(response)
  store.game = response.game
}
const newGameFailure = function (error) {
  $('#message').text('Game could not be created. Error: ' + error.responseJSON.message)
  console.log(error)
}
const updateGameSuccess = function (response) {
  $('#message').text('Move successful.')
  console.log(response)
  store.game = response.game
}
const updateGameFailure = function (error) {
  $('#message').text('Update unsuccessful, with error:' + error.responseJSON.message)
}
module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure
}
