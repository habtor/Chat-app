import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  createGroup,
  getGroups,
  addParticipantToGroup,
  sendGroupMessage,
} from "../controllers/group.controller.js";

const router = express.Router();

router.get("/", protectRoute, getGroups);
router.post("/", protectRoute, createGroup);
router.post("/:id", protectRoute, addParticipantToGroup);
router.post("/send/:id", protectRoute, sendGroupMessage);

export default router;
