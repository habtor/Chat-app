import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
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
        .send("You should update at least one user's property");
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
    res.status(500).json({ error: "Internal server error",error: error.message});
  }
};
