import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchInfiniteUsers } from "../services/infiniteScrollApi";

const PAGE_SIZE = 10;

export const useInfiniteUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],

    initialPageParam: 0,

    queryFn: ({ pageParam }) => fetchInfiniteUsers(pageParam, PAGE_SIZE),

    getNextPageParam: (lastPage, allPages) => {
      const loadedUsers = allPages.flatMap((page) => page.users);

      return loadedUsers.length < lastPage.total ? allPages.length : undefined;
    },
  });
};
