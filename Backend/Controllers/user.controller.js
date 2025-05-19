import { erroeMiddlware } from "../Middlewares/error.middleware.js";
import User from "../Models/user.model.js"
import { asyncHandler } from "../Utilities/asyncHandler.utility.js";
import { errorHandler } from "../Utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";

export const register = asyncHandler(async(req,res,next) => {
        const { fullname , username , password , gender} = req.body

        if(!fullname || !username || !password || !gender) {
           return next(new errorHandler("All fields are required" , 400))
        }

        //Searching about the user in the database
        const user = await User.findOne({username});
        if(user){
            return next(new errorHandler("Username already exists" , 400))
        }


        //Hashing the password:
        const hashedPassword = await bcrypt.hash(password, 10)


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

        res.send(200).json({
            success: true,
            responseData: {
                newUser
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

        res.send(200).json({
            success: true,
            responseData: {
                user
            }
        })        
}
)