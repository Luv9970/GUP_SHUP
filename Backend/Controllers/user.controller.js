import { errorMiddleware } from "../Middlewares/error.middleware.js";
import User from "../Models/user.model.js"
import { asyncHandler } from "../Utilities/asyncHandler.utility.js";
import { errorHandler } from "../Utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = asyncHandler(async(req,res,next) => {
        const { fullname , username , password , gender} = req.body
        // console.log(fullname , username , password , gender)
        // res.send("Register API is working fine")

        if(!fullname || !username || !password || !gender) {
           return next(new errorHandler("All fields are required" , 400))
        }

        //Searching whether the usermane provided by the user is unique or not or it alerady exists in the database
        const user = await User.findOne({username});
        if(user){
            return next(new errorHandler("Username already exists" , 400))
        }

 
        //Hashing the password:
        const hashedPassword = await bcrypt.hash(password, 10)

        //Creating an avatar for the user:
        const avatarType = gender === "male" ? "boy" : "girl"
        const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`

        //If user is not there then create a new user
        const newUser = await User.create({
            fullname, 
            username, 
            password: hashedPassword, 
            gender,
            avatar
        })

        // //Creating a token for the user:
        // const tokenData={
        //     id:newUser._id,
        // }
        // // const token = jwt.sign(data_jo_save_karana_hai , JWT_Secret , Expiry_time)
        // const token = jwt.sign(tokenData , process.env.JWT_SECRET , {expiresIn: process.env.JWT_EXPIRE})

        res
        .status(200)
        // .cookie("token", token , {
        //     expires:new Date(
        //         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        //     ),
        //     httpOnly:true,
        //     //NODE_ENV by default mil jata hai
        //     secure:process.env.NODE_ENV === "production",
        //     sameSite: "None"
        // })
        .json({
            success: true,
            responseData: {
                newUser,
                // token
            }
        })        
}
)

export const login = asyncHandler(async(req,res,next) => {
        const { username , password } = req.body

        if(!username || !password) {
           return next(new errorHandler("Please enter a valid username or password" , 400))
        }

        //Searching about the user in the database
        const user = await User.findOne({username});
        if(!user){
            return next(new errorHandler("Please enter a valid username or password" , 400))
        }

        //If user is present then comparing the password:
        const isValidPassword  = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            return next(new errorHandler("Please enter a valid username or password" , 400))
        }

        // //Creating a token for the user:
        // const tokenData={
        //     id:user._id,
        // }
        // // const token = jwt.sign(data_jo_save_karana_hai , JWT_Secret , Expiry_time)
        // const token = jwt.sign(tokenData , process.env.JWT_SECRET , {expiresIn: process.env.JWT_EXPIRE})

        res
        .status(200)
        // .cookie("token",token , {
        //     expires:new Date(
        //         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        //     ),
        //     httpOnly:true,
        //     //NODE_ENV by default mil jata hai
        //     secure:process.env.NODE_ENV === "production",
        //     sameSite: "None"
        // })
        .json({
            success: true,
            responseData: {
                user,
                // token
            }
        })        
}
)

export const getProfile = asyncHandler(async(req,res,next) => {
    const userId = req.user._id;
    
    console.log(userId)
    const profile =await User.findById(userId)

    res.status(200).json({
        success: true,
        responseData: {
            profile
        }
    })
})