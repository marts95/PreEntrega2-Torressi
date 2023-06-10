import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemList.css";

export const ItemListPresentacional = ({ items }) => {
  return (
    <div className="tarjetitas">
      {items.map((elemento) => {
        return <ProductCard className="tarj-individual" key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};
