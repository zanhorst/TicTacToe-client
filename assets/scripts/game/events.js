'use strict'
const ui = require('./ui')
const api = require('./api')
// const store = require('./../store')
// const store = require('./../store')
let currentPlayer
// create game event
const onNewGame = function (event) {
  event.preventDefault()
  console.log(event)
  // store.cells = ['', '', '', '', '', '', '', '', '']
  // store.gameActive = true
  // store.i = 0
  // store.player1 = 'X'
  // store.player2 = 'O'
  // store.currentPlayer = 'X'
  //   $('.box').text('')
  currentPlayer = 'X'
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
const onUpdateGame = function (event) {
  $('#message2').text('Current player is ' + currentPlayer)
  const cellIndex = $(event.target).data('cell-index')
  // const gameBoard = store.game.cells
  const value = $(event.target).html()
  console.log(value, currentPlayer)
  if (value === '') { // if space is empty,
    $(event.target).text(currentPlayer) // then play on that space,
    api.updateGame(cellIndex, currentPlayer) // update the api,
      .then(ui.updateGameSuccess)
    if (currentPlayer === 'X') { // and change players,
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    $('#message').text('Current player is ' + currentPlayer)
  } else { // or let the player know that their move was not accepted.
    $('#message').text('Invalid Move: Spot Taken.')
  }
}
// const checkWin =

module.exports = {
  onNewGame,
  onUpdateGame
  // checkWin
}
