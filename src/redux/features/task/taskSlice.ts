import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

import { deleteUser } from '../user/userSlice';

import { RootState } from '@/redux/store';
import { ITask } from '@/types/task.types';

interface InitialState {
  tasks: ITask[];
  filter: 'All' | 'High' | 'Medium' | 'Low';
}

const initialState: InitialState = {
  tasks: [
    {
      id: 'aaaa',
      title: 'Machine Learning',
      description: 'Learn basics of machine learning in 30 days',
      isCompleted: false,
      priority: 'High',
      assignedTo: null,
      dueDate: '2025-03-14',
    },
  ],
  filter: 'All',
};

type DraftTask = Pick<
  ITask,
  'title' | 'description' | 'dueDate' | 'priority' | 'assignedTo'
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
    dueDate: new Date(taskData.dueDate).toISOString(),
  };
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },

    toggleCompletedState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task,
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateFilter: (
      state,
      action: PayloadAction<'Low' | 'Medium' | 'High' | 'All'>,
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task,
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === 'Low') {
    return state.todo.tasks.filter((task) => task.priority === 'Low');
  } else if (filter === 'Medium') {
    return state.todo.tasks.filter((task) => task.priority === 'Medium');
  } else if (filter === 'High') {
    return state.todo.tasks.filter((task) => task.priority === 'High');
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompletedState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
