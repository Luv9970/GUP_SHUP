import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import { connectDB } from './DB/connection1.db.js';
import cookieParser from 'cookie-parser';

connectDB()
const app = express();

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

//routes
import userRoute from './Routes/user.route.js'
app.use("/api/v1/user" , userRoute)

//middlewares
import { erroeMiddlware } from './Middlewares/error.middleware.js';
app.use(erroeMiddlware);






app.listen(PORT , ()=>{
    console.log(`Your server is running on ${PORT}`)
})