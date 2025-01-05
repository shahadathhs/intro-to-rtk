import { Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import {
  deleteTask,
  toggleCompletedState,
} from '@/redux/features/task/taskSlice';
import { selectUsers } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { ITask } from '@/types/task.types';

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const assignedUser = users.find((user) => user.id === task.assignedTo);

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn('size-3 rounded-full', {
              'bg-green-500': task.priority === 'Low',
              'bg-yellow-500': task.priority === 'Medium',
              'bg-red-500': task.priority === 'High',
            })}
          ></div>
          <h1 className={cn({ 'line-through': task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            variant={'link'}
            className="p-0 text-red-500"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompletedState(task.id))}
          />
        </div>
      </div>
      <p>Assigned to - {assignedUser ? assignedUser.name : 'none'}</p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
