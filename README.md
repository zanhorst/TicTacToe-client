# Bugs
##### (Known issues)
---------------

The function that checks for a winner works, however it works one turn late. That means that the winner will be notified one turn late, and the wrong player will be displayed as the winner. This also means that a 'draw' outcome will never be visible to the player, due to the fact that the game board cannot update again once the board is full.

New game will eventually properly reset the game board entirely, allowing only one button to control the creation of games.

The game is ugly. I have currently only styled the buttons enough that they are clickable, and hidden a few other things here and there to follow the rules. This is not currently a priority, but it will be updated once more important work is finished.

# Rules
---------------

This is still just Tic Tac Toe, but the rules are as follows:

## Win Conditions
---------------

There are 8 win conditions, only one needs to be achieved to win the game. If no conditions are met, and there are no more spaces left on the game board, the game will end in a stalemate.
You need 3-in-a-row of your pieces (X or O) to win. This can look like any of the following: (x and O are interchangeable)

| x | x | x |
| . | . | . |
| . | . | . |

| . | . | . |
| O | O | O |
| . | . | . |

| . | . | . |
| . | . | . |
| x | x | x |

| O | . | . |
| O | . | . |
| O | . | . |

| . | x | . |
| . | x | . |
| . | x | . |

| . | . | O |
| . | . | O |
| . | . | O |

| x | . | . |
| . | x | . |
| . | . | x |

| . | . | O |
| . | O | . |
| O | . | . |

## Legal Moves
---------------

Any open space on the board is a legal space to play a piece. You cannot overwrite a move made previously in the game, without restarting the game.

# Project Documentation
---------------

## Technologies used

* Atom
* Node.js
* Grunt
* FlexBox
* JavaScript
* HTML
* CSS
* Ajax
* jQuery
* Git
* GitHub
* curl

## Planning
##### (Pseudo-code)

### Setup
Setup github repo, and link to local repo.
Download website template.
Update github repo with local repo.
(Notes: Commit often, create detailed commit messages, and )
### HTML
Start off by creating the template, and setting up elements to contain error messages and other text, as well as fields for authorization and game board functionality.
### JavaScript
Tackle one problem at a time!
If you get stuck, walk away for a minute, and come back to it, OR work on a different piece of the problem for a little while.
Template: start out all javascript code by figuring out how you will store your data, globally or locally. Design functions based on this. If a function only works with global or local variables, adjust accordingly.
Follow guide for writing api calls provided by General Assembly. Do not forget to export variables and functions as necessary.

## Wireframe and user stories

(Wireframe Link)[*link*]
If this doesn't exist, it's because I haven't finished creating a digital version of my wireframe. It will be updated shortly.

### User stories

As a player, I want to be able to see all of the games I've played, for bragging rights of course!

As a player, I want to be notified who won, when they win, so that no one gets confused.

As a user, I want to be able to change my password, to kepp my account secure.

As a user, I want to be able to sign in and out as I please, for convenience.

As a player, I want to be able to play with friends, to wallow away to the marching of Time.

## Problem solving story

The piece of my 'update' function which tells both the api that there is a winner and the front end that the game board should turn off has proven to be exceedingly challenging to solve. Initially my idea was to check for empty space in the game cells, then check to see if the different cells for a win condition have met, or if there are no more possible moves. Unfortunately, it appears that this function runs and updates the api, but doesn't recieve the updated version of the API until one turn later, causing an abundance of issues. My idea is that I should define an external variable, global to my events.js file only, and update it before I update my API, then check for a winner on that variable instead, then update my messages and turn everything off, then update my API. This is still a work in progress as I am writing, this story will be updated as I continue my crusade against TypeErrors and weird undefined variables.
