import { useMemo } from "react";

import { FixedSizeList } from "react-window";

import UserRow from "../modules/virtualization/components/UserRow";

import { generateUsers } from "../modules/virtualization/services/generateUsers";

const VirtualizationPage = () => {
  const users = useMemo(() => generateUsers(), []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Virtualization</h1>

      <p className="mb-4">Total Users: {users.length}</p>

      <FixedSizeList
        height={600}
        width="100%"
        itemCount={users.length}
        itemSize={80}
        itemData={{ users }}
      >
        {UserRow}
      </FixedSizeList>
    </div>
  );
};

export default VirtualizationPage;
