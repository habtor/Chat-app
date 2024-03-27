import Group from "../models/group.model.js";
import User from "../models/user.model.js";
import GroupMessage from "../models/groupMessages.js";

export const createGroup = async (req, res) => {
  try {
    const { name, description } = req.body;

    const creator = req.user._id;

    const group = await Group.findOne({ name });

    if (group) {
      return res.status(400).json({ error: "Group already exists" });
    }

    const newGroup = new Group({
      name,
      description,
      creator,
      participants: [creator],
      image: "https://cdn1.iconfinder.com/data/icons/ui-4/502/group-512.png",
    });

    await newGroup.save();

    res.status(201).json(newGroup);
  } catch (error) {
    console.log("Error in createGroup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getGroups = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredGroups = await Group.find({ participants: loggedInUserId })
      .populate({
        path: "participants",
        select: "-password",
      })
      .exec();

    res.status(200).json(filteredGroups);
  } catch (error) {
    console.log("Error in getGroups controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getOneGroup = async (req, res) => {
  try {
    const { id: groupId } = req.params;
    const senderId = req.user._id;

    const groupChat = await Group.findOne({ _id: groupId });

    if (!groupChat) return res.status(200).json([]);

    return res.status(200).json(groupChat);
  } catch (error) {
    console.log("Error in getGroup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateGroup = async (req, res) => {
  try {
    const { id: groupToUpdate } = req.params;
    const { name, description, image, username } = req.body;
    const loggedInUserId = req.user._id;

    const group = await Group.findOne({ _id: groupToUpdate });

    if (!group) {
      return res.status(400).json({ error: "Group not found" });
    }

    if (group.creator.toString() !== loggedInUserId.toString()) {
      return res.status(400).json({
        error: "Only group creator can update or add members to group",
      });
    }

    if (name) {
      group.name = name;
    }

    if (description) {
      group.description = description;
    }

    if (image) {
      group.image = image;
    }

    if (username) {
      const participant = await User.findOne({ username });
      if (!participant) {
        return res.status(400).json({ error: "Username not found" });
      }
      if (group.participants.includes(participant._id)) {
        return res.status(400).json({ error: "Username already in group" });
      }
      group.participants.push(participant._id);
    }

    await group.save();

    res.status(200).json(group);
  } catch (error) {
    console.log("Error in updateGroup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendGroupMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: groupId } = req.params;
    const sender = req.user;

    const group = await Group.findOne({ _id: groupId });

    if (!group) {
      return res.status(400).json({ error: "Group not found" });
    }

    if (!group.participants.includes(sender._id)) {
      return res.status(400).json({ error: "You are not a participant" });
    }

    const newGroupMessage = new GroupMessage({
      sender,
      content: message,
    });

    if (newGroupMessage) {
      group.messages.push(newGroupMessage);
    }

    await Promise.all([group.save(), newGroupMessage.save()]);

    res.status(201).json(newGroupMessage);
  } catch (error) {
    console.log("Error in sendGroupMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getGroupMessages = async (req, res) => {
  try {
    const { id: groupId } = req.params;

    const groupChat = await Group.findOne({ _id: groupId }).populate({
      path: "messages",
      select: "-password",
      populate: {
        path: "sender",
        model: "User",
      },
    });

    if (!groupChat) return res.status(404).json({ error: "Group not found" });
    const messages = groupChat.messages;

    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getGroup controller", error.message);
    res.status(500).json({ error: "Internal server error in get one" });
  }
};
