import { createSlice } from "@reduxjs/toolkit";

let initialState = {};
userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state = action.user;
    },
  },
});
