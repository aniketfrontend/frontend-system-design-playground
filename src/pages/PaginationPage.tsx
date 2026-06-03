import { useState } from "react";

import UserTable from "../modules/pagination/components/UserTable";

import PaginationControls from "../modules/pagination/components/PaginationControls";

import { useUsers } from "../modules/pagination/hooks/useUsers";

const PAGE_SIZE = 10;

const PaginationPage = () => {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useUsers(page, PAGE_SIZE);

  if (loading) {
    return <h2 className="text-xl">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="text-red-500">{error}</h2>;
  }

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Offset Pagination</h1>

      {data && (
        <>
          <UserTable users={data.users} />

          <PaginationControls
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default PaginationPage;
