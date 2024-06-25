import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/modeSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
