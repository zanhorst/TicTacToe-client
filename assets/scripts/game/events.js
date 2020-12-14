'use strict'
const ui = require('./ui')
const api = require('./api')
let currentPlayer
// create game event
const onNewGame = function (event) {
  event.preventDefault()
  console.log(event)
  currentPlayer = 'X' // defines the current player on game create.
  $('#message2').text('Current player is ' + currentPlayer)
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
const onUpdateGame = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  const value = $(event.target).html()
  console.log(value, currentPlayer)
  if (value === '') { // if space is empty,
    $(event.target).text(currentPlayer) // then play on that space,
    api.updateGame(cellIndex, currentPlayer) // update the api,
      .then(ui.updateGameSuccess)
    if (currentPlayer === 'X') { // change players,
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    $('#message2').text('Current player is ' + currentPlayer) // and display the current player.
  } else { // OR let the player know that their move was not accepted.
    $('#message2').text('Invalid Move: Spot Taken.')
  }
}
// win condition example:
// [0] !== '' && [0] === [1] && [0] === [2]
// const checkWin =

module.exports = {
  onNewGame,
  onUpdateGame
  // checkWin
}
