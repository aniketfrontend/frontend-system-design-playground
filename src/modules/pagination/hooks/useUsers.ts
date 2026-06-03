import { useEffect, useState } from "react";

import { fetchUsers } from "../services/paginationApi";

import { type User, type UsersResponse } from "../types/user.types";

export const useUsers = (page: number, limit: number) => {
  const [data, setData] = useState<UsersResponse | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchUsers(page, limit);

        setData(response);
      } catch {
        setError("Something went wrong while loading users.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [page, limit]);

  return {
    data,
    loading,
    error,
  };
};
