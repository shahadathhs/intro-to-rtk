import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types/user.types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{user.name}</p>
        <div className="flex gap-3 items-center">
          <Button
            variant={"link"}
            className="p-0 text-red-500"
            onClick={() => dispatch(deleteUser(user.id))}
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
