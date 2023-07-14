import "./inicio.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div>
        <img
          src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1686142072/Panader%C3%ADa%20S%C3%A1nchez/tortasinicio_ighzgm.jpg"
          style={{ width: "40vw", borderRadius: "10px" }}
        ></img>
        <img
          src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1686142068/Panader%C3%ADa%20S%C3%A1nchez/alfajorescuadrado_zbc1bj.jpg"
          style={{ width: "40vw", borderRadius: "10px" }}
        ></img>
      </div>
      <div className="cajaDerecha">
        <img
          src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1686142070/Panader%C3%ADa%20S%C3%A1nchez/Imagen_inicio1_jwkvph.jpg"
          style={{ width: "100%", borderRadius: "10px" }}
        ></img>
        <h1 style={{ paddingTop: "2rem", fontSize: "55px" }}>
          Nuestra historia
        </h1>
        <p style={{ fontSize: "25px" }}>
          Panadería Sánchez fue fundada en la ciudad de La Banda, Santiago del
          Estero en el año 1955 por Manuel Sánchez Porra. En sus comienzos fue
          administrada por el fundador junto a sus hijos Víctor Manuel Sánchez y
          José Ernesto Sánchez y funcionaba en Rivadavia 462, ciudad de La
          Banda. Con el paso de los años la panadería queda a cargo solo de los
          hijos del fundador, y eventualmente deciden separarse en 1970 quedando
          la panadería sobre calle Rivadavia a cargo de Víctor Sánchez. A lo
          largo de los años funcionaron otras sucursales además de la original
          hasta que se abrió una sucursal definitiva en Alberdi 860 en ciudad de
          La Banda. Tanto la sucursal de Rivadavia como la de Alberdi
          funcionaron bajo la administración de Víctor Sánchez hasta que en 2010
          sus cuatro hijas se hacen cargo de ellas.
        </p>
      </div>
    </div>
  );
};
