import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/users/userSlice";
import authReducer from "../feature/signup/authSlice";
import loginReducer from "../feature/login/loginSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    loginUser: loginReducer
  },
});