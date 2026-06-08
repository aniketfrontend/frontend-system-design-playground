import { useState } from "react";

import SearchInput from "../modules/debounce/components/SearchInput";
import UserList from "../modules/debounce/components/UserList";

import { useDebounce } from "../modules/debounce/hooks/useDebounce";
import { useSearchUsers } from "../modules/debounce/hooks/useSearchUsers";

const DebouncingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const { data = [], isLoading } = useSearchUsers(debouncedSearch);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Debouncing Search</h1>

      <SearchInput value={searchTerm} onChange={setSearchTerm} />

      <p className="mt-4 text-gray-500">Raw Input: {searchTerm}</p>

      <p className="text-gray-500">Debounced: {debouncedSearch}</p>

      {isLoading && <p>Searching...</p>}

      <div className="mt-6">
        <UserList users={data} />
      </div>
    </div>
  );
};

export default DebouncingPage;
