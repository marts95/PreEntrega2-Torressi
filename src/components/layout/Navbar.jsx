import { CartWidget } from "../common/CartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="logo">Panadería <br></br>Sánchez</h3>
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
