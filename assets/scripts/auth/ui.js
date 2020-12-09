'use strict'
const store = require('./../store.js')

const signUpSuccess = function (response) {
  $('#message').text('Signed up. Please log in.')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed. Error is: ' + error.responseJSON.message)
}
const signInSuccess = function (response) {
  $('#message').text('Signed in.')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed. Error is: ' + error.responseJSON.message)
}
const signOutSuccess = function (response) {
  $('#message').text('Signed out.')
}

const signOutFailure = function (error) {
  $('#message').text('Sign out failed. Error is: ' + error.responseJSON.message)
}
const changePasswordSuccess = function (response) {
  $('#message').text('Password changed sucessfully.')
}

const changePasswordFailure = function (error) {
  $('#message').text('Password could not be changed. Error is: ' + error.responseJSON.message)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
