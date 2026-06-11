import ConnectionStatus from "../modules/websocket/components/ConnectionStatus";

import EventCard from "../modules/websocket/components/EventCard";

import { useFakeWebSocket } from "../modules/websocket/hooks/useFakeWebSocket";

const WebSocketPage = () => {
  const { events, connected } = useFakeWebSocket();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">WebSocket Updates</h1>

      <ConnectionStatus connected={connected} />

      <div className="space-y-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            message={event.message}
            timestamp={event.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default WebSocketPage;
