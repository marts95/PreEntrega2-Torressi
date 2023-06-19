import { useState } from "react";

export const useCount = (inicial, stock, minimo = 1) => {
  const [count, setCount] = useState(inicial);

  const decremento = () => {
    if (count > minimo) setCount(count - 1);
  };

  const incremento = () => {
    if (count < stock) setCount(count + 1);
  };

  return { count, decremento, incremento };
};
