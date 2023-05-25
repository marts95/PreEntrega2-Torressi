function App() {
  const saludar = () => {
    console.log("Hola, como estas? Bienvenido");
  };

  return (
  <button onClick={saludar}>saludar</button>
  );
}

export default App;
