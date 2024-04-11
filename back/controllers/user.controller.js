import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    
    const loggedInUser = await User.findById(req.user._id);
    const contactUserIds = loggedInUser.contacts;

    const contacts = await User.find({ _id: { $in: contactUserIds } }).select(
      "-password"
    );

    res.status(200).json(contacts);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const theUser = await User.findOne({
      _id: req.user._id,
    }).select("-password");

    const { firstname, lastname, username, profilePic } = req.body;

    if (
      req.body.firstname === undefined &&
      req.body.lastname === undefined &&
      req.body.profilePic === undefined &&
      req.body.username === undefined
    ) {
      return res
        .status(400)
        .json({ error: "You should update at least one user's property" });
    }

    if (firstname && lastname) {
      theUser.firstname = firstname;
      theUser.lastname = lastname;
      theUser.profilePic = `https://avatar.iran.liara.run/username?username=${firstname}+${lastname}`;
    }
    if (username) {
      theUser.username = username;
    }

    if (profilePic && !(firstname && lastname)) {
      theUser.profilePic = profilePic;
    }

    await theUser.save();
    res.status(200).json(theUser);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res
      .status(500)
      .json({ error: "Internal server error", error: error.message });
  }
};

export const addUserToContacts = async (req, res) => {
  try {
    const { username } = req.body;

    const loggedInUser = await User.findById(req.user._id);

    const userToBeAdded = await User.findOne({ username });

    if (!userToBeAdded) {
      return res.status(404).json({ error: "User not found" });
    }

    if (loggedInUser._id.toString() === userToBeAdded._id.toString()) {
      return res
        .status(400)
        .json({ error: "You can't add yourself to contacts" });
    }

    if (loggedInUser.contacts.includes(userToBeAdded._id)) {
      return res.status(400).json({ error: "User already in contacts" });
    }

    loggedInUser.contacts.push(userToBeAdded._id);
    userToBeAdded.contacts.push(loggedInUser._id);

    await loggedInUser.save();
    await userToBeAdded.save();

    return res.status(200).json(userToBeAdded);
  } catch (error) {
    console.log("Error in addUserToContacts controller", error.message);
    return res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
