# Tic-Tac-Toe Game Server

This is a Tic-Tac-Toe game server built with Node.js and Express. It supports HTTP communication for game interactions.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd tic-tac-toe

   ```

2. **run server commands:**

   ```bash
   # for the first time
   npm install
   npm run build

   # after first steps
   npm start
   ```

## Endpoints

**API Endpoints - Using Postman for example**

1. **Join a new game as a player or as a second player to an existing game**

   ```bash
   request:
   Method: POST
   URL: http://localhost:3000/game/join
   Body: None

   response:
   {
       "playerId": "unique-player-id",
       "sign": "X",
       "gameId": "unique-game-id"
   }
   ```

2. **play a move as a player**

   ```bash
   request:
   Method: POST
   URL: http://localhost:3000/game/move
   Body:
       {
           "playerId": "unique-player-id",
           "move": 0, // position on the board (0-8)
           "gameId": "unique-game-id"
       }

   response:
   {
       "board": [null, "X", null, null, "O", null, null, null, null]
       "winner": "sign" // only after a winning move
   }
   ```

3. **get a game state**

   ````bash
   request:
   Method: GET
   URL: http://localhost:3000/game/state/:gameId

   response:
   ```bash
   {
   "id": "game-id",
   "currentPlayer": "X",
   "board": [null, "X", null, null, "O", null, null, null, null]
   }
   ````
