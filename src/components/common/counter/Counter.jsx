export const Counter = ({contador, setContador}) => {
  return (
    <div>
      <h1>{contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar
      </button>
    </div>
  );
};
