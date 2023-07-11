import "./itemDetail.css";
import { ItemCount } from "../../common/counter/ItemCount.jsx";

export const ItemDetail = ({ productoSeleccionado, cantidad, onAdd }) => {
  
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
          {productoSeleccionado.stock > 0 ? (<ItemCount
            inicial={cantidad}
            stock={productoSeleccionado.stock}
            onAdd={onAdd}
          />) : (<h2 style={{fontWeight: "600"}}>NO HAY STOCK</h2>)}
        </div>
      </div>
    </div>
  );
};
