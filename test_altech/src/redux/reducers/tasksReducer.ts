import {initialState, Task} from '@models/InterfaceDataListTodo';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const newTask: Task = {
        id: new Date().toISOString(),
        dateTodo: String(action.payload.dateTodo),
        taskName: action.payload.taskName,
        completed: action.payload.completed,
      };
      state.tasks.push(newTask);
      console.log('reducer', newTask);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(item => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const {addTask, deleteTask, toggleTask, setTasks} = tasksSlice.actions;
export default tasksSlice.reducer;
