import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    isAuthenticated: false,
  },
  reducers: {
    Login: () => {
        console.log("Hello login");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending , (state,action)=>{
      state.entities.push(action.payload); 
    }); 
    builder.addCase(loginUserThunk.fulfilled , (state,action)=>{
      state.entities.push(action.payload); 
    }); 
    builder.addCase(loginUserThunk.rejected , (state,action)=>{
      state.entities.push(action.payload); 
    });
  }
})

// Action creators are generated for each case reducer function
export const { Login } = userSlice.actions

export default userSlice.reducer