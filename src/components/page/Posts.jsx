import { useFetch } from "../hooks/useFetch";

export const Posts = () => {
  const [posteos] = useFetch([], "https://jsonplaceholder.typicode.com/posts");
  console.log(posteos);

  return <div>Posts</div>;
};
