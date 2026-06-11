type Props = {
  connected: boolean;
};

const ConnectionStatus = ({ connected }: Props) => {
  return (
    <div
      className={`p-3 rounded mb-6 ${
        connected ? "bg-green-100" : "bg-red-100"
      }`}
    >
      {connected ? "Connected" : "Disconnected"}
    </div>
  );
};

export default ConnectionStatus;
