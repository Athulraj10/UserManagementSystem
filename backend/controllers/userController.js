import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
//description   Auth User/set token
//route         POST /api/users/auth
//access        Public
const authUser = asyncHandler(async (req, res) => {
    const {email,password}=req.body;
    console.log(req.body)
    const user=await User.findOne({email})


    if(user && (await user.matchPassword(password))){
        generateToken(res,user._id);
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        });
    }else{
        res.status(401);
        throw new Error ('invalid Email or password')
    }
});

//description   Register a New User
//route         POST /api/users
//access        Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if(user){
    generateToken(res,user._id)
    res.status(201).json({
    _id:user._id,
    name:user.name,
    email:user.email
    });
  }else{
    res.status(400);
    throw new Error("Invalid User Data")
  }
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
