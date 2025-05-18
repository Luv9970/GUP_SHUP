import express from 'express';

const app = express();

const PORT = 5000

//routes
import userRoute from './Routes/user.route.js'
app.use("/api/v1/user" , userRoute)







app.listen(PORT , ()=>{
    console.log(`Your server is running on ${PORT}`)
})