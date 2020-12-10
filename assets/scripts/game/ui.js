'use strict'

const newGameSuccess = function (response) {
  $('#message').text('Game created.')
  $('.container').show()
}
const newGameFailure = function (error) {
  $('#message').text('Game could not be created. Error: ' + error.responseJSON.message)
}
module.exports = {
  newGameSuccess,
  newGameFailure
}
