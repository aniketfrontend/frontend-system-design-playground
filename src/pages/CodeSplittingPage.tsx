import { lazy, Suspense, useState } from "react";

import ChartSkeleton from "../modules/code-splitting/components/ChartSkeleton";

const HeavyChart = lazy(
  () => import("../modules/code-splitting/components/HeavyChart")
);

const CodeSplittingPage = () => {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Code Splitting</h1>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowChart(true)}
      >
        Load Analytics Dashboard
      </button>

      {showChart && (
        <div className="mt-6">
          <Suspense fallback={<ChartSkeleton />}>
            <HeavyChart />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default CodeSplittingPage;
