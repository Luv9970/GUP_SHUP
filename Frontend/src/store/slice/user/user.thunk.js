import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../Components/Utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("users/fetchById" , async({username,password},{ rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/user/login", {
            username,
            password
        })
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
        // const errorOutput = error
        // toast.error(errorOutput)
        // return rejectWithValue(errorOutput);
    }
});