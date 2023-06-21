import { Link } from "react-router-dom";
import "./NotFound.css"

export const NotFound = () => {
  return (
    <div className="encontrar">
      <p>ESTÁ PÁGINA NO EXISTE</p>
      <img
        className="gato"
        src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1687308627/Panader%C3%ADa%20S%C3%A1nchez/404_ymj9q3.jpg"
      ></img>
      <Link to="/">
        <button>VOLVER AL SITIO</button>
      </Link>
    </div>
  );
};
