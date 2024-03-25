import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import groupRoutes from "./routes/group.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors"; // Import cors package

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Root route");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on PORT ${PORT}`);
});
