import { useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import UserRow from "../modules/virtualization/components/UserRow";

import { generateUsers } from "../modules/virtualization/services/generateUsers";

const VirtualizationPage = () => {
  const users = useMemo(() => generateUsers(), []);

  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: users.length,

    getScrollElement: () => parentRef.current,

    estimateSize: () => 80,

    overscan: 5,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Virtualization</h1>

      <div className="bg-yellow-50 p-4 rounded mb-6">
        <p>
          Dataset Size:
          {users.length.toLocaleString()}
        </p>

        <p>Only visible rows are rendered.</p>
      </div>

      <div ref={parentRef} className="h-[600px] overflow-auto border rounded">
        <div
          style={{
            height: virtualizer.getTotalSize(),
            position: "relative",
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const user = users[virtualRow.index];

            return (
              <div
                key={user.id}
                style={{
                  position: "absolute",

                  top: 0,

                  left: 0,

                  width: "100%",

                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <UserRow user={user} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualizationPage;
