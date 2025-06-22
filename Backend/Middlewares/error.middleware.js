// This will show the error in the proper format since earlier we were not able to capctur the whole error in proper format
export const errorMiddleware = (err , req , res , next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
    
    res.status(err.statusCode).json({
        success: false,
        errMessage: err.message,
    });


}