export const FetchingDeDatosPresentacional = ({ productos, crearProducto }) => {
  return (
    <div className="listita">
      {productos.map((producto) => {
        return (
          <div key={producto.id}>
            <h2>{producto.title}</h2>
            <h3 style={{ paddingLeft: "2rem" }}>{producto.price}</h3>
          </div>
        );
      })}
      <button onClick={crearProducto}>Crear producto</button>
    </div>
  );
};
