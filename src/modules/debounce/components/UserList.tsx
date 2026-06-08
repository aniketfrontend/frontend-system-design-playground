import { type User } from "../../pagination/types/user.types";

type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="bg-white shadow p-4 rounded">
          <h3>
            {user.firstName} {user.lastName}
          </h3>

          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
