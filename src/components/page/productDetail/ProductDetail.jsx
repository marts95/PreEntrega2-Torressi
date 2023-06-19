import "./productDetail.css";
import { ItemCount } from "../../common/counter/ItemCount.jsx";

export const ProductDetail = ({productoSeleccionado}) => {
const onAdd = (cantidad) =>{
  let info = {
    ...productoSeleccionado, 
    quantity: cantidad
  }
  console.log(info)
}

  return (
    <>
      <div className="tarjetaDetalle">
        <img style={{maxWidth: 200}} src={productoSeleccionado.img} alt=""/>
        <h2>{productoSeleccionado.title}</h2>
      </div>
      <ItemCount inicial={1} stock={productoSeleccionado.stock} onAdd={onAdd} />
    </>
  );
};
