import { configureStore } from "@reduxjs/toolkit";

// Slices
import userSlice from "../slices/user.slice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
