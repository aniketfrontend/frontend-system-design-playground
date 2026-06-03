import { useEffect, useRef } from "react";

import UserCard from "../modules/infinite-scroll/components/UserCard";

import { useInfiniteUsers } from "../modules/infinite-scroll/hooks/useInfiniteUsers";

const InfiniteScrollPage = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteUsers();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 1,
      }
    );

    const current = observerRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>Error loading users</h2>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Infinite Scroll</h1>

      <div className="grid grid-cols-2 gap-4">
        {data?.pages.map((page) =>
          page.users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>

      <div ref={observerRef} className="h-10" />

      {isFetchingNextPage && <p className="mt-4">Loading more users...</p>}
    </div>
  );
};

export default InfiniteScrollPage;
