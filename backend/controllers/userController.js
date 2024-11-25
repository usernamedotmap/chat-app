import User from "../models/user.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error dito sa user controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
