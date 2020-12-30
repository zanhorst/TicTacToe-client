'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')
// $('message3').text(store.games.length)
// variable defining who will make the next move. this changes only after a player makes a valid move
let currentPlayer
// variable defining whether or not the game is over. this is changed only when a game is created, and when a winner is decided, even if the winner is cat.
let gameOver

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
const checkWin = function (event) {
  if (store.game.cell[0] !== '' && store.game.cell[0] === store.game.cell[1] && store.game.cells[0] === store.game.cell[2]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else if (store.game.cell[3] !== '' && store.game.cell[3] === store.game.cell[4] && store.game.cell[3] === store.game.cell[5]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else if (store.game.cell[6] !== '' && store.game.cell[6] === store.game.cell[7] && store.game.cell[6] === store.game.cell[8]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else if (store.game.cell[0] !== '' && store.game.cell[0] === store.game.cell[3] && store.game.cell[0] === store.game.cell[6]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else if (store.game.cell[1] !== '' && store.game.cell[1] === store.game.cell[4] && store.game.cell[1] === store.game.cell[7]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else if (store.game.cell[2] !== '' && store.game.cell[2] === store.game.cell[5] && store.game.cell[2] === store.game.cell[8]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else if (store.game.cell[0] !== '' && store.game.cell[0] === store.game.cell[4] && store.game.cell[0] === store.game.cell[8]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else if (store.game.cell[2] !== '' && store.game.cell[2] === store.game.cell[4] && store.game.cell[2] === store.game.cell[6]) {
    gameOver = true
    $('#message').text('The winner is player ' + currentPlayer + '!')
  } else {
    gameOver = false
  }
}
const onUpdateGame = function (event) {
  console.log(event)
  const cellIndex = $(event.target).data('cell-index')
  console.log(cellIndex)
  const value = $(event.target).text()
  console.log(value, currentPlayer)
  if (value === '') { // if space is empty,
    $(event.target).text(currentPlayer) // then play on that space,
    checkWin()
    api.updateGame(cellIndex, currentPlayer, gameOver) // update the api,
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
    if (currentPlayer === 'X') { // change players,
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    $('#message2').text('Current player is ' + currentPlayer) // and display the current player.
  } else { // OR let the player know that their move was not accepted.
    $('#message2').text('Invalid Move.')
  }
  console.log(store.game.cell)

}
// win condition example:
// [0] !== '' && [0] === [1] && [0] === [2]

module.exports = {
  onNewGame,
  onUpdateGame
}
