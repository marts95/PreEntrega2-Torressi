import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cardCarrito.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@mui/material";

export const CardCarrito = ({ producto }) => {
  const { eliminarPorId } = useContext(CartContext);

  return (
    <div key={producto.id} className="tarjeta-carrito">
      <img
        src={producto.img}
        style={{ height: "100px", borderRadius: "5px" }}
      ></img>
      <div>
        <h3>Producto</h3>
        <h2>{producto.title}</h2>
      </div>
      <div>
        <h3>Precio x unidad</h3>
        <h2>$ {producto.price}</h2>
      </div>
      <div>
        <h3>Cantidad</h3>
        <h2>{producto.quantity}</h2>
      </div>
      <Button onClick={() => eliminarPorId(producto.id)}>
        <AiOutlineDelete style={{ color: "red" }} size="30px" />
      </Button>
    </div>
  );
};
