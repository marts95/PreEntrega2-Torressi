import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1686142071/Panader%C3%ADa%20S%C3%A1nchez/LogoBlancoSF_r8auqm.png"
            alt=""
            style={{ width: "90px", display: "flex", alignItems: "center" }}
          />
        </Link>
        <ul className="lista">
          <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
            Inicio
          </Link>
          <Link to="/productos" style={{ color: "#ffffff", textDecoration: "none" }}>
            Productos
          </Link>
          <Link to="/contacto" style={{ color: "#ffffff", textDecoration: "none" }}>
            Contacto
          </Link>
        </ul>
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};
