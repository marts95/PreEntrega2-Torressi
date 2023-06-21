import "./itemDetail.css";
import { ItemCount } from "../../common/counter/ItemCount.jsx";

export const ItemDetail = ({ productoSeleccionado }) => {
  const onAdd = (cantidad) => {
    let info = {
      ...productoSeleccionado,
      quantity: cantidad,
    };
    console.log(info);
  };

  return (
    <div className="detalle">
      <div className="tarjetaDetalle">
        <div style={{display: "flex", justifyContent: "end"}}>
          <img className="imagen" src={productoSeleccionado.img} alt="" />
        </div>
        <div className="informacion">
          <h1>{productoSeleccionado.title}</h1>
          <h3>{productoSeleccionado.description}</h3>
          <h2>$ {productoSeleccionado.price}</h2>
          <ItemCount
            inicial={1}
            stock={productoSeleccionado.stock}
            onAdd={onAdd}
          />
        </div>
      </div>
    </div>
  );
};
