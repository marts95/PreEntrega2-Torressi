import { CartWidget } from "../common/CartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="../../../LogoBlancoSF.png"
        alt=""
        style={{ width: "90px" }}
      />
      <ul className="lista">
        <li>Inicio</li>
        <li>Reseñas</li>
        <li>Tienda</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};
