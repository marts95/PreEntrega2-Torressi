import { BsCart4 } from "react-icons/bs";

export function CartWidget() {
  return (
    <div className="icono">
      <BsCart4 />
      <span className="conteo">0</span>
    </div>
  );
}

