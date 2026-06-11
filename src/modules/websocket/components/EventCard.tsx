type Props = {
  message: string;
  timestamp: string;
};

const EventCard = ({ message, timestamp }: Props) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3>{message}</h3>

      <p className="text-sm text-gray-500">{timestamp}</p>
    </div>
  );
};

export default EventCard;
