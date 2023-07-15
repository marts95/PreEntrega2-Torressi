import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { useContext } from "react";
import Swal from "sweetalert2";
import { CardCarrito } from "../../common/cardCarrito/CardCarrito";
import { Summary } from "../../common/summary/Summary";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const CartContainer = () => {
  const { carrito, vaciarCarrito, eliminarPorId, obtenerTotalCompra } =
    useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "¿Estás seguro que quieres vaciar el carrito?",
      imageUrl:
        "https://res.cloudinary.com/dp8auiwtw/image/upload/v1689010341/Panader%C3%ADa%20S%C3%A1nchez/wonder-wondering_mb8cc9.jpg",
      imageWidth: 400,
      imageHeight: 300,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, elimina todo!",
      denyButtonText: `No, me arrepentí!`,
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire({
          imageUrl:
            "https://res.cloudinary.com/dp8auiwtw/image/upload/c_scale,w_180/v1689346147/Panader%C3%ADa%20S%C3%A1nchez/7efs_yz9lxp.gif",
          title: "¡Producto agregado!",
          showConfirmButton: true,
          timer: 2000,
        });
      } else if (result.isDenied) {
        Swal.fire("El carrito no se modificó", "", "warning");
      }
    });
  };

  let totalCompra = obtenerTotalCompra();

  return (
    <div className="carrito">
      <div>
        {carrito.map((producto) => {
          return (
            <CardCarrito
              key={producto.id}
              producto={producto}
              eliminarPorId={eliminarPorId}
            />
          );
        })}
      </div>
      <div>
        {carrito.length === 0 ? (
          <div className="no-hay-productos">
            <img src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1689356610/Panader%C3%ADa%20S%C3%A1nchez/264162db570a4614c8fd7dc15c757b8e_w200_odebol.gif"></img>
            <h1>No hay productos agregados al carrito</h1>
            <Link to="/productos">
              <Button
                style={{
                  backgroundColor: "#c17767",
                  color: "#ffffff",
                  borderRadius: "8px",
                  borderColor: "transparent",
                  cursor: "grab",
                  transition: "background-color 0.5s, color 0.5s",
                }}
              >Seguir comprando</Button>
            </Link>
          </div>
        ) : (
          <div>
            <Summary
              carrito={carrito}
              limpiar={limpiar}
              totalCompra={totalCompra}
            />
          </div>
        )}
      </div>
    </div>
  );
};
