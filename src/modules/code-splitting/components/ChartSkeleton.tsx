const ChartSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-100 p-6 rounded">
      <div className="h-8 bg-gray-300 rounded mb-4"></div>

      <div className="space-y-4">
        <div className="h-20 bg-gray-300 rounded"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ChartSkeleton;
