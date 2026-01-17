import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupApi } from "./authApi";

// 🔹 async thunk
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (payload, { rejectWithValue }) => {
    try {
      return await signupApi(payload);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    signupSuccess: false,
  },
  reducers: {
    resetSignupState: (state) => {
      state.loading = false;
      state.error = null;
      state.signupSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.signupSuccess = false;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signupSuccess = true;
        state.user = action.payload?.user || null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetSignupState } = authSlice.actions;
export default authSlice.reducer;
