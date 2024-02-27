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
