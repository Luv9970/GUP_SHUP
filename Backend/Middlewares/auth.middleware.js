import jwt from "jsonwebtoken";
import { asyncHandler } from "../Utilities/asyncHandler.utility.js";
import { errorHandler } from "../Utilities/errorHandler.utility.js";


//Check karna hai ki user authenticated hai ki nahi
export const isAuthenticated = asyncHandler(async(req,res,next) => {
 const token  = req.cookies.token || req.headers["authorization"]?.replace("Bearer ", "");
 if(!token){
     return next(new errorHandler("Invalid token" , 400))
 } 
 
 const tokenData = jwt.verify(token , process.env.JWT_SECRET); 
 req.user = tokenData;
 next();
})