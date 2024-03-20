import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    //{ _id: { $ne: loggedInUserId } } this part will prevent us from seeing our self in the sidebar, wo, we r selecting all users exept us
    // if you want to add yourself to send message to yourself  just remove the above { _id: { $ne: loggedInUserId } }

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

    const { fullname, username, profilePic } = req.body;

    if (
      req.body.fullname === undefined &&
      req.body.profilePic === undefined &&
      req.body.username === undefined
    ) {
      return res
        .status(400)
        .send("You should update at least one user's property");
    }

    if (fullname) {
      theUser.fullname = fullname;
      theUser.profilePic = `https://avatar.iran.liara.run/username?username=${fullname}`;
    }
    if (username) {
      theUser.username = username;
    }

    if (profilePic && !fullname) {
      theUser.profilePic = profilePic;
    }

    await theUser.save();
    res.status(200).json(theUser);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
