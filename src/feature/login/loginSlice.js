import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./loginApi";

// 🔹 async thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      return await loginApi(payload);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    error: null,
    signupSuccess: false,
  },
  reducers: {
    resetLoginState: (state) => {
      state.loading = false;
      state.error = null;
      state.signupSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.signupSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signupSuccess = true;
        state.user = action.payload?.user || null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;
