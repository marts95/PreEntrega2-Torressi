import { Link } from "react-router-dom";

export const ItemCategory = () => {
  return (
    <div className="categorias">
      <ul className="lista-cat">
        <Link
          to="/category/salado"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Salado
        </Link>
        <Link
          to="/category/dulce"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Dulce
        </Link>
        <Link
          to="/category/especialidad"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Especialidad
        </Link>
      </ul>
    </div>
  );
};
