import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemList.css";

export const ItemListPresentacional = ({ items }) => {
  return (
    <div className="tarjetitas">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};
