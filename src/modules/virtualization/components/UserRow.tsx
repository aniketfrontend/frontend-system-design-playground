interface User {
  id: number;
  name: string;
  email: string;
}

type Props = {
  user: User;
};

const UserRow = ({ user }: Props) => {
  return (
    <div className="border-b px-4 h-20 flex items-center bg-white">
      <div>
        <h3 className="font-medium">{user.name}</h3>

        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default UserRow;
