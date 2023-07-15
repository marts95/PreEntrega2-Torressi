import { Button} from "@mui/material";
import "./summary.css";
import { Link } from "react-router-dom";

export const Summary = ({ limpiar, totalCompra, carrito }) => {
  return (
    <div className="resumen">
      <h1>Resumen de carrito</h1>
      <h2>Productos:</h2>
      {carrito.map((producto) => {
        return (
            <div key={producto.id} className="tarjeta-resumen">
              <img
                style={{ height: "70px", width: "70px", borderRadius: "5px" }}
                src={producto.img}
              ></img>
              <h3>
                {producto.title} - x{producto.quantity}
              </h3>
              <h3>$ {producto.price}</h3>
            </div>
        );
      })}
      <div style={{display: "flex", gap: "1rem", paddingTop: "2rem"}}>
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
      </div>
      <h2>El total del carrito es: $ {totalCompra}</h2>
    </div>
  );
};
