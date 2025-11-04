import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./utilities/state/taskSlice.js";
export default configureStore({
  reducer: {
    state: taskReducer,
  },
});
