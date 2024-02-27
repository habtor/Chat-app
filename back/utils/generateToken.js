import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict", // prevent CSRF
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookies;
