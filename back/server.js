import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import groupRoutes from "./routes/group.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(cors());
// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/front/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "front", "dist", "index.html"))
);

app.get("/", (req, res) => {
  res.send("Root route");
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on PORT ${PORT}`);
});
