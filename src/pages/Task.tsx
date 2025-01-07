import { AddTaskModal } from '@/components/module/task/AddTaskModal';
import TaskCard from '@/components/module/task/TaskCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetTasksQuery } from '@/redux/api/baseApi';
import { updateFilter } from '@/redux/features/task/taskSlice';
import { useAppDispatch } from '@/redux/hook';
import { ITask } from '@/types/task.types';

export default function Task() {
  // const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  // console.log(tasks);

  const { data, isLoading } = useGetTasksQuery('tasks', {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter('All'))}
              value="All">
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter('Low'))}
              value="Low">
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter('Medium'))}
              value="Medium">
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter('High'))}
              value="High">
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {!isLoading &&
          data?.map((task: ITask) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
}
