"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController");
const router = (0, express_1.Router)();
router.post("/join", gameController_1.joinGameController);
router.post("/move", gameController_1.playMoveController);
router.get("/state/:gameId", gameController_1.stateController);
exports.default = router;
