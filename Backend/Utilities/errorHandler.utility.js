class ErrorHandler extends Error{
    constructor(message , statusCode){
        super(message);
        this.statusCode = statusCode;
        Error.capctureStackTrace(this , this.constructor)
    }
}

export const errorHandler = ErrorHandler;