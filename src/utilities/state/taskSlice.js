import {createSlice, nanoid} from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    storeTask: (state,action) => {
      const task = {id:nanoid(), task:action.payload}
      state.task.push(task)
    },

    removeTask: () => {},
  }
});

export const { storeTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
