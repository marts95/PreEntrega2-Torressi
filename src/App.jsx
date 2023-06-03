import { Footer } from "./components/layout/Footer.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
import { ItemListContainer } from "./components/page/itemListContainer/ItemListContainer.jsx";



function App() {
  
  

  return (
    <>
      <Navbar />
      <ItemListContainer/>
      <Footer/>
    </>
  );
}

export default App;
