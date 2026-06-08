export const generateUsers = () => {
  return Array.from({ length: 100000 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@gmail.com`,
  }));
};
