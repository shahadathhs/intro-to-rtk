import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api/baseApi';
import taskReducer from './features/task/taskSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  // reducer: {
  //   todo: taskReducer,
  //   userList: userReducer,
  // },
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todo: taskReducer,
    userList: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
