export interface Task {
  id?: string;
  dateTodo: string;
  taskName: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: [],
};
