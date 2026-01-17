import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/users/userSlice";
import authReducer from "../feature/signup/authSlice";
import loginReducer from "../feature/login/loginSlice";
import getProfileReducer from "../feature/getProfile/getProfileSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    loginUserState: loginReducer,
    getProfileState: getProfileReducer,
  },
});