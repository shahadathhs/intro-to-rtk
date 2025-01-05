import { AddUserModal } from "@/components/module/user/AddUserModal";
import UserCard from "@/components/module/user/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";


const Users = () => {
    const users = useSelector(selectUsers);
    console.log(users);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
        <div className="flex justify-between items-center gap-5">
          <h1 className="mr-auto">Users</h1>
          <AddUserModal />
          
        </div>
        <div className="mt-8 grid grid-cols-3 gap-5">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
};

export default Users;