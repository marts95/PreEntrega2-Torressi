import { useFetch } from "../hooks/useFetch";

export const Users = () => {
  const [usuarios] = useFetch([], "https://jsonplaceholder.typicode.com/users");
  console.log(usuarios);

  return <div>Users</div>;
};
