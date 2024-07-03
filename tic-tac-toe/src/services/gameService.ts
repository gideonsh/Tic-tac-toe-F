import { v4 as uuidv4 } from "uuid";
import { Player, GameState } from "../models/gameModels";

const players: Player[] = [];
const games: GameState[] = [];

export const joinGame = ():
  | { playerId: string; sign: "X" | "O"; gameId: string }
  | { error: string } => {
  const openGame = games.find(
    (game) =>
      game.board.includes(null) &&
      !players.find((p) => p.gameId === game.id && p.sign === "O")
  );

  if (!openGame) {
    const gameId = uuidv4();
    const newGame: GameState = {
      id: gameId,
      currentPlayer: "X",
      board: Array(9).fill(null),
    };
    games.push(newGame);

    const playerId = uuidv4();
    players.push({ identifier: playerId, sign: "X", gameId });
    return { playerId, sign: "X", gameId };
  }

  const gameId = openGame.id;
  const playerId = uuidv4();
  players.push({ identifier: playerId, sign: "O", gameId });
  return { playerId, sign: "O", gameId };
};

export const playMove = (
  playerId: string,
  move: number
): { board: (string | null)[]; winner?: string } | { error: string } => {
  const player = players.find((p) => p.identifier === playerId);
  if (!player) return { error: "Player not found." };

  const game = games.find((g) => g.id === player.gameId);
  if (!game) return { error: "Game not found." };
  if (game.winner !== undefined) return game;
  if (game.currentPlayer !== player.sign) return { error: "Not your turn." };
  if (game.board[move] !== null)
    return { error: "Invalid move. The slot is already taken." };

  game.board[move] = player.sign;
  if (checkWin(game, player.sign)) {
    return { board: game.board, winner: player.sign };
  }

  game.currentPlayer = game.currentPlayer === "X" ? "O" : "X";
  return { board: game.board };
};

export const state = (gameId: string): GameState | { error: string } => {
  const game = games.find((g) => g.id === gameId);
  if (!game) {
    return { error: "Game not found." };
  }
  return game;
};

const checkWin = (game: GameState, player: "X" | "O") => {
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

  const isWon = winPatterns.some((pattern) =>
    pattern.every((index) => game.board[index] === player)
  );

  if (isWon) game.winner = player;
  return isWon;
};
