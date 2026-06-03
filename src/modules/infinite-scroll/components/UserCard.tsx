import { type User } from "../../pagination/types/user.types";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="font-semibold">
        {user.firstName} {user.lastName}
      </h3>

      <p>{user.email}</p>

      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserCard;
