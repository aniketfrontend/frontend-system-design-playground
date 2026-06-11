import { useEffect, useState } from "react";

import { generateRandomEvent } from "../services/eventGenerator";

import { type Event } from "../types/event.types";

export const useFakeWebSocket = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setConnected(true);

    const interval = setInterval(() => {
      setEvents((previous) => [generateRandomEvent(), ...previous]);
    }, 3000);

    return () => {
      clearInterval(interval);
      setConnected(false);
    };
  }, []);

  return {
    events,
    connected,
  };
};
