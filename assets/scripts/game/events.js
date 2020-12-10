'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

// create game event
const onNewGame = function (event) {
  event.preventDefault()
  store.cells = ['', '', '', '', '', '', '', '', '']
  store.gameActive = true
  store.i = 0
  store.player1 = 'X'
  store.player2 = 'O'
  store.currentPlayer = 'X'
  $('.box').text('')
  api.newGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
module.exports = {
  onNewGame
}
