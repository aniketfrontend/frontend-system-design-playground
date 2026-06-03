const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        Frontend System Design Playground
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Interactive demonstrations of frontend architecture, performance
        optimization and scalability concepts.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <Card title="Pagination" description="Navigate data page by page" />

        <Card title="Infinite Scroll" description="Load content dynamically" />

        <Card title="Debouncing" description="Reduce excessive API calls" />

        <Card title="Caching" description="Improve performance using cache" />

        <Card
          title="Virtualization"
          description="Render large lists efficiently"
        />

        <Card title="WebSocket" description="Real-time communication" />
      </div>
    </div>
  );
};

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-semibold text-xl mb-2">{title}</h2>

      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default HomePage;
