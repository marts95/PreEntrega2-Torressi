import { Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
      {carrito.length === 0 ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10rem",
          }}
        >
          No hay productos agregados al carrito
        </h1>
      ) : (
        <div>
          <Button
            style={{
              backgroundColor: "#c17767",
              color: "#ffffff",
              borderRadius: "8px",
              borderColor: "transparent",
              cursor: "grab",
              transition: "background-color 0.5s, color 0.5s",
            }}
            onClick={limpiar}
          >
            Vaciar carrito
          </Button>
          <Link to="/checkout">
            <Button
              style={{
                backgroundColor: "#c17767",
                color: "#ffffff",
                borderRadius: "8px",
                borderColor: "transparent",
                cursor: "grab",
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              Finalizar compra
            </Button>
          </Link>
          <h2>El total del carrito es: {totalCompra}</h2>
        </div>
      )}
      {carrito.map((producto) => {
        return (
          <div key={producto.id}>
            <h2>{producto.title}</h2>
            <h2>{producto.price}</h2>
            <h2>{producto.quantity}</h2>
            <button onClick={() => eliminarPorId(producto.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
};
