type Props = {
  index: number;
  style: React.CSSProperties;
  data: {
    users: {
      id: number;
      name: string;
      email: string;
    }[];
  };
};

const UserRow = ({ index, style, data }: Props) => {
  const user = data.users[index];

  return (
    <div style={style} className="border-b px-4 flex items-center bg-white">
      <div>
        <h3>{user.name}</h3>

        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default UserRow;
