import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  image: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  messages: [
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Group = mongoose.model("Group", groupSchema);

export default Group;
