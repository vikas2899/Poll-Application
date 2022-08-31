import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  currentUser: null,
};

export const userLogin = createAsyncThunk("user/login", async (userData) => {
  const response = await axios.post("/api/auth/login", userData);
  return response.data;
});

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("persist:root");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.error = action.error.message;
    });
  },
});

export default userLoginSlice.reducer;
export const { userLogout } = userLoginSlice.actions;
