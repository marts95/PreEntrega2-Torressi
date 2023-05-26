import "./ItemListContainer.css"

export const ProductsList = (greeting) => {

  return (
    <div className="titulo">
      <h2>Aquí van los productos</h2>
      <h1>Hola {greeting.nombre}</h1>
    </div>
  );
};
