import { Badge } from "@mui/material";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";

export const Navbar = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <img
          src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1686142071/Panader%C3%ADa%20S%C3%A1nchez/LogoBlancoSF_r8auqm.png"
          alt=""
          style={{ width: "90px" }}
        />
        <ul className="lista">
          <li>Todos los productos</li>
          <li>Salado</li>
          <li>Dulce</li>
          <li>Especialidad</li>
        </ul>
        <Badge color="secondary" badgeContent={10} max={9}>
          <BsCart4 />
        </Badge>
      </div>
      {children}
    </>
  );
};
