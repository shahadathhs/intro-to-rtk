import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITask } from '@/types/task.types';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  tagTypes: ['todo', 'userList', 'task'],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], string>({
      query: () => '/tasks',
      providesTags: ['task'],
    }),
    createTask: builder.mutation<ITask, Partial<ITask>>({
      query: (task) => ({
        url: '/tasks',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['task'],
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = baseApi;