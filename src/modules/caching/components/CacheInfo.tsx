type Props = {
  isFetching: boolean;
};

const CacheInfo = ({ isFetching }: Props) => {
  return (
    <div className="bg-blue-50 p-4 rounded mb-6">
      <p>{isFetching ? "Refreshing data..." : "Background Fetching: No"}</p>
    </div>
  );
};

export default CacheInfo;
