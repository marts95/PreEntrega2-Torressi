import "./Counter.css";
import { useCount } from "../../hooks/useCount";

export const ItemCount = ({ stock, inicial=1, onAdd }) => {
  const { count, decremento, incremento } = useCount(inicial, stock);

  return (
    <div className="todo">
      <div className="contador">
        <button onClick={decremento}>-</button>
        <span>{count}</span>
        <button onClick={incremento}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
