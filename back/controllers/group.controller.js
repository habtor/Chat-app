import Group from "../models/group.model.js";
import User from "../models/user.model.js";

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

    const filteredGroups = await Group.find({
      participants: { $all: [loggedInUserId] },
    });

    res.status(200).json(filteredGroups);
  } catch (error) {
    console.log("Error in getGroups controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addParticipantToGroup = async (req, res) => {
  try {
    const { id: groupToUpdate } = req.params;
    const { username } = req.body;
    const loggedInUserId = req.user._id;

    const group = await Group.findOne({ _id: groupToUpdate });

    if (!group) {
      return res.status(400).json({ error: "Group not found" });
    }

    if (group.creator.toString() !== loggedInUserId.toString()) {
      return res
        .status(400)
        .json({ error: "You are not the creator of the group" });
    }

    const participant = await User.findOne({ username });

    if (!participant) {
      return res.status(400).json({ error: "Participant not found" });
    }

    if (group.participants.includes(participant._id)) {
      return res.status(400).json({ error: "Participant already in group" });
    }

    group.participants.push(participant._id);

    await group.save();

    res.status(200).json(group);
  } catch (error) {
    console.log("Error in addParticipantToGroup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendGroupMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: groupId } = req.params;
    const sender = req.user._id;

    const group = await Group.findOne({ _id: groupId });

    if (!group) {
      return res.status(400).json({ error: "Group not found" });
    }

    if (!group.participants.includes(sender)) {
      return res.status(400).json({ error: "You are not a participant" });
    }

    const newGroupMessage = {
      sender,
      content: message,
    };

    if (newGroupMessage) {
      group.messages.push(newGroupMessage);
    }

    await group.save();
    // await conversation.save();
    // await newMessage.save();
    // OR the follwing is better because it run in paralel
    //   await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newGroupMessage);
  } catch (error) {
    console.log("Error in sendGroupMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
