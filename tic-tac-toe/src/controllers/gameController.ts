import { Request, Response } from "express";
import { joinGame, playMove, state } from "../services/gameService";

export const joinGameController = (req: Request, res: Response) => {
  const result = joinGame();
  if ("error" in result) {
    return res.status(400).json({ error: result.error });
  }
  return res.json(result);
};

export const playMoveController = (req: Request, res: Response) => {
  const { playerId, move } = req.body;
  const result = playMove(playerId, move);
  if ("error" in result) {
    return res.status(400).json({ error: result.error });
  }
  return res.json(result);
};

export const stateController = (req: Request, res: Response) => {
  const { gameId } = req.params;
  const result = state(gameId);
  if ("error" in result) {
    return res.status(404).json({ error: result.error });
  }
  return res.json(result);
};
