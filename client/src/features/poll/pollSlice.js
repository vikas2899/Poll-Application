import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  currentPoll: null,
};

export const pollCreate = createAsyncThunk("poll/create", async (pollData) => {
  const response = await axios.post("/api/poll/create", pollData);
  return response.data;
});

const pollSlice = createSlice({
  name: "pollCreate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(pollCreate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(pollCreate.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPoll = action.payload;
      state.error = "";
    });
    builder.addCase(pollCreate.rejected, (state, action) => {
      state.loading = false;
      state.currentPoll = null;
      state.error = action.error.message;
    });
  },
});

export default pollSlice.reducer;
