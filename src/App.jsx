import { Footer } from "./components/layout/Footer.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
import { ProductsList } from "./components/page/itemListContainer/ItemListContainer.jsx";



function App() {
  
  let nombre = "Claudia";

  return (
    <>
      <Navbar />
      <ProductsList nombre={nombre}/>
      <Footer/>
    </>
  );
}

export default App;
