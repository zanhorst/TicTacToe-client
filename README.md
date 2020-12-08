# Rules
--------

This is still just tik tak toe, but the rules are as follows:

## Win Conditions
-------------------

There are 8 win conditions, only one needs to be achieved to win the game. If no conditins are met, and there are no more spaces left on the game board, the game will end in a stalemate.
You need 3-in-a-row of your pieces (X or O) to win. This can look like any of the following:

| x | x | x |
| . | . | . |
| . | . | . |

| . | . | . |
| x | x | x |
| . | . | . |

| . | . | . |
| . | . | . |
| x | x | x |

| x | . | . |
| x | . | . |
| x | . | . |

| . | x | . |
| . | x | . |
| . | x | . |

| . | . | x |
| . | . | x |
| . | . | x |

| x | . | . |
| . | x | . |
| . | . | x |

| . | . | x |
| . | x | . |
| x | . | . |

## Legal Moves
---------------

Any open space on the board is a legal space to play a piece. You cannot overwrite a move made previously in the game, without restarting the game.
