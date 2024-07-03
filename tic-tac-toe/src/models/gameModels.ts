export interface Player {
  identifier: string;
  sign: "X" | "O";
  gameId: string;
}

export interface GameState {
  id: string;
  currentPlayer: "X" | "O";
  board: (string | null)[];
  winner?: "X" | "O";
}
