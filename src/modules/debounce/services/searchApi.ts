import { type User } from "../../pagination/types/user.types";

export const searchUsers = async (query: string): Promise<User[]> => {
  if (!query.trim()) {
    return [];
  }

  const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);

  if (!response.ok) {
    throw new Error("Failed to search users");
  }

  const data = await response.json();

  return data.users;
};
