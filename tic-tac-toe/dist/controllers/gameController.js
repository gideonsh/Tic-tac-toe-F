"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateController = exports.playMoveController = exports.joinGameController = void 0;
const gameService_1 = require("../services/gameService");
const joinGameController = (req, res) => {
    const result = (0, gameService_1.joinGame)();
    if ("error" in result) {
        return res.status(400).json({ error: result.error });
    }
    return res.json(result);
};
exports.joinGameController = joinGameController;
const playMoveController = (req, res) => {
    const { playerId, move } = req.body;
    const result = (0, gameService_1.playMove)(playerId, move);
    if ("error" in result) {
        return res.status(400).json({ error: result.error });
    }
    return res.json(result);
};
exports.playMoveController = playMoveController;
const stateController = (req, res) => {
    const { gameId } = req.params;
    const result = (0, gameService_1.state)(gameId);
    if ("error" in result) {
        return res.status(404).json({ error: result.error });
    }
    return res.json(result);
};
exports.stateController = stateController;
