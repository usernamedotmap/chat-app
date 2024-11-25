import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        error: "Unauthorized wlaang token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        error: "Unauthorized, Invalid token",
      });
    }

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Sa Protect route may problem", error.message);
    res.status(500).json({
      error: "Internal server eerror",
    });
  }
};

export default protectRoute;