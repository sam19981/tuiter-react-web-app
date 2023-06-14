import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


// export const loginThunk = createAsyncThunk(
//  "user/login", async (credentials) => {
//    const user = await authService.login(credentials);
//    return user;
//  }
// );

export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials, { rejectWithValue }) => {
      try {
        const user = await authService.login(credentials);
        if (user) {
          return user;
        } else {
          return rejectWithValue("Invalid credentials");
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    const response = await authService.profile();
    return response;
   });
   export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
   });
  
  export const updateUserThunk = createAsyncThunk(

    "user/updateUser", async (user) => {
      console.log("inside thunk")
      console.log(user)
      await authService.updateUser(user);
      return user;
   });
   
//    export const registerThunk = createAsyncThunk(
//     "user/register",
//     async (credentials) => {
//       const user = await authService.register(credentials);
//       return user;
//     }
//   ); 

export const registerThunk = createAsyncThunk(
    "user/register",
    async (credentials) => {
      const user = await authService.register(credentials);
      console.log("in thunkl")
      console.log(user);
      return user;
    }
  );
   
   

