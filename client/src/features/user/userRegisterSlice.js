import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  currentUser: null,
};

export const userRegister = createAsyncThunk(
  "user/register",
  async (userData) => {
    const response = await axios.post("/api/auth/register", userData);
    return response.data;
  }
);

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = "";
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.error = action.error.message;
    });
  },
});

export default userRegisterSlice.reducer;
