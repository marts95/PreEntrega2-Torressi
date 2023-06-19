import { useFetch } from "../../hooks/useFetch";

export const Comments = () => {
  const [comentarios] = useFetch([], "https://jsonplaceholder.typicode.com/comments");
  console.log(comentarios);
  return (
    <div>Comments</div>
  )
}
