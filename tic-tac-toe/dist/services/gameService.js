"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = exports.playMove = exports.joinGame = void 0;
const uuid_1 = require("uuid");
const players = [];
const games = [];
const joinGame = () => {
    const openGame = games.find((game) => game.board.includes(null) &&
        !players.find((p) => p.gameId === game.id && p.sign === "O"));
    if (!openGame) {
        const gameId = (0, uuid_1.v4)();
        const newGame = {
            id: gameId,
            currentPlayer: "X",
            board: Array(9).fill(null),
        };
        games.push(newGame);
        const playerId = (0, uuid_1.v4)();
        players.push({ identifier: playerId, sign: "X", gameId });
        return { playerId, sign: "X", gameId };
    }
    const gameId = openGame.id;
    const playerId = (0, uuid_1.v4)();
    players.push({ identifier: playerId, sign: "O", gameId });
    return { playerId, sign: "O", gameId };
};
exports.joinGame = joinGame;
const playMove = (playerId, move) => {
    const player = players.find((p) => p.identifier === playerId);
    if (!player)
        return { error: "Player not found." };
    const game = games.find((g) => g.id === player.gameId);
    if (!game)
        return { error: "Game not found." };
    if (game.winner !== undefined)
        return game;
    if (game.currentPlayer !== player.sign)
        return { error: "Not your turn." };
    if (game.board[move] !== null)
        return { error: "Invalid move. The slot is already taken." };
    game.board[move] = player.sign;
    if (checkWin(game, player.sign)) {
        return { board: game.board, winner: player.sign };
    }
    game.currentPlayer = game.currentPlayer === "X" ? "O" : "X";
    return { board: game.board };
};
exports.playMove = playMove;
const state = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    if (!game) {
        return { error: "Game not found." };
    }
    return game;
};
exports.state = state;
const checkWin = (game, player) => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const isWon = winPatterns.some((pattern) => pattern.every((index) => game.board[index] === player));
    if (isWon)
        game.winner = player;
    return isWon;
};
