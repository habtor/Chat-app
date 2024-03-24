import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  createGroup,
  getGroups,
  getOneGroup,
  updateGroup,
  sendGroupMessage,
  getGroupMessages,
} from "../controllers/group.controller.js";

const router = express.Router();

router.get("/", protectRoute, getGroups);
router.get("/:id/messages", protectRoute, getGroupMessages);
router.get("/:id", protectRoute, getOneGroup);
router.post("/", protectRoute, createGroup);
router.post("/:id", protectRoute, updateGroup);
router.post("/send/:id", protectRoute, sendGroupMessage);

export default router;
