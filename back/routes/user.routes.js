import express from "express";
import {
  getUsersForSidebar,
  updateUser,
  addUserToContacts
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.patch("/:id", protectRoute, updateUser);
router.post("/:id", protectRoute, addUserToContacts);

export default router;
