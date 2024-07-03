import { Router } from "express";
import {
  joinGameController,
  playMoveController,
  stateController,
} from "../controllers/gameController";

const router = Router();

router.post("/join", joinGameController);
router.post("/move", playMoveController);
router.get("/state/:gameId", stateController);

export default router;
