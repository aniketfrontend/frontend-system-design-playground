import { useQuery } from "@tanstack/react-query";

import { searchUsers } from "../services/searchApi";

export const useSearchUsers = (query: string) => {
  return useQuery({
    queryKey: ["search-users", query],

    queryFn: () => searchUsers(query),

    enabled: query.trim().length > 0,
  });
};
