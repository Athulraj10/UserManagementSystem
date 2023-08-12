import asyncHandler from "express-async-handler";

//description   Auth User/set token
//route         POST /api/users/auth
//access        Public
const authUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Something Went Wrong');
  res.status(200).json({ message: "Auth User" });
});

//description   Register a New User
//route         POST /api/users
//access        Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//description   userLogout
//route         POST /api/users/logout
//access        private
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout User" });
});

//description   get user profile
//route         GET /api/users/profile
//access        private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get user Profile" });
});

//description   update user profile
//route         PUT /api/users/update
//access        private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
