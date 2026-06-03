import { type User } from "../types/user.types";

type Props = {
  users: User[];
};

const UserTable = ({ users }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-3 text-left">Name</th>

            <th className="p-3 text-left">Email</th>

            <th className="p-3 text-left">Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">
                {user.firstName} {user.lastName}
              </td>

              <td className="p-3">{user.email}</td>

              <td className="p-3">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
