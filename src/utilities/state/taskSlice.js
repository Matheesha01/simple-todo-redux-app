import {createSlice, nanoid} from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    storeTask: (state,action) => {
      if (action.payload === ''){
        alert("Write your task")
      }else{
        const task = {id:nanoid(), task:action.payload}
        state.task.push(task)
      }
    },

    removeTask: (state,action) => {
     const removeTaskId = action.payload
     state.task = state.task.filter(task => task.id !== removeTaskId)
    },
  }
});

export const { storeTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
