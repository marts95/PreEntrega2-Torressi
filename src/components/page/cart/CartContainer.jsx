import "./Cart.css";

export const CartContainer = () => {
  const comprar = () => {
    console.log("Su compra fue exitosa");
  };

  return (
    <div className="carrito">
      <h1>Carrito</h1>
      <h2>Aquí van las cards de los elementos añadidos</h2>
      <button className="comprar" onClick={comprar}>
        Comprar
      </button>
    </div>
  );
};
