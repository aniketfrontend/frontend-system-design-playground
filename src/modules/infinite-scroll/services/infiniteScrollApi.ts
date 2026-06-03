import { type UsersResponse } from "../../pagination/types/user.types";

export const fetchInfiniteUsers = async (
  pageParam: number,
  limit: number
): Promise<UsersResponse> => {
  const skip = pageParam * limit;

  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};
