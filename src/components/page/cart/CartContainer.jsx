import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { useContext } from "react";

export const CartContainer = () => {
  const { carrito, vaciarCarrito, eliminarPorId } = useContext(CartContext);


  return (
    <div className="carrito">
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      {carrito.map((producto) => {
        return (
          <div key={producto.id}>
            <h2>{producto.title}</h2>
            <h2>{producto.price}</h2>
            <h2>{producto.quantity}</h2>
            <button onClick={()=>eliminarPorId(producto.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
};
