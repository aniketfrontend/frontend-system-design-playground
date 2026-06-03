import { type UsersResponse } from "../types/user.types";

export const fetchUsers = async (
  page: number,
  limit: number
): Promise<UsersResponse> => {
  const skip = (page - 1) * limit;

  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};
