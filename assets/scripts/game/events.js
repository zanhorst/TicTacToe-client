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
  currentPlayer = 'X' // defines the current player on game create.
  $('#message2').text('Current player is ' + currentPlayer)
  $('#message3').text('')
  // $('#button').text('')
  $('#button').on()
  $('#show-games').hide()
  gameOver = false
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
const onShowGames = function (event) {
  event.preventDefault()
  // console.log(store.games)
  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

const onUpdateGame = function (event) {
  // console.log(event)
  const cellIndex = $(event.target).data('cell-index')
  const value = $(event.target).text()
  if (value === '') { // if space is empty,
    api.updateGame(cellIndex, currentPlayer, gameOver) // update the api,
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
    $(event.target).text(currentPlayer) // then play on that space,
    const gameArray = store.game.cells
    if (gameOver === false) {
      if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
        gameOver = true
        // replace
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('The winner is player ' + currentPlayer + '!')
      } else if (Object.values(gameArray).length !== gameArray.length) {
        gameOver = true
        // replace
        $('#show-games').show()
        $('#message3').text('Draw. Game over.')
      } else {
        gameOver = false
      }
    }
    if (currentPlayer === 'X') { // change players,
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    $('#message2').text('Current player is ' + currentPlayer) // and display the current player.
  } else { // OR let the player know that their move was not accepted.
    $('#message2').text('Invalid Move.')
  }
  // console.log(store.game.cells)
}
// win condition example:
// [0] !== '' && [0] === [1] && [0] === [2]

module.exports = {
  onNewGame,
  onUpdateGame,
  onShowGames
}
