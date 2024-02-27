import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized, No token provieded" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized, Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "User not found!" });
    }

    req.user = user;

    next(); // this will call the next funxtion in the route, here is "sendMessage"  =>  router.post("/send/:id", protectRoute, sendMessage);
  } catch (error) {
    console.log("Error in protectroute middleware", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default protectRoute;
