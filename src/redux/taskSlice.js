import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: action.payload.id,
        name: action.payload.name,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      const deletedTaskIds = action.payload;
      state = state.filter((task) => !deletedTaskIds.includes(task.id));
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
