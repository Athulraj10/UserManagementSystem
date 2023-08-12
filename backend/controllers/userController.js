import asyncHandler from 'express-async-handler';



//description   Auth User/set token
//route         POST /api/users/auth 
//access        Public
const authUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Auth User'})
});

export {
    authUser
};