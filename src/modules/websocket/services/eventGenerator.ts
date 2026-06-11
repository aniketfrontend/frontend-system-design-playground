const events = [
  "New user registered",
  "Payment completed",
  "Order shipped",
  "Server deployed",
  "New message received",
  "Comment added",
];

export const generateRandomEvent = () => {
  const randomIndex = Math.floor(Math.random() * events.length);

  return {
    id: Date.now(),
    message: events[randomIndex],
    timestamp: new Date().toLocaleTimeString(),
  };
};
