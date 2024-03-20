import express from "express";
import {
  getUsersForSidebar,
  updateUser,
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.patch("/:id", protectRoute, updateUser);

export default router;
