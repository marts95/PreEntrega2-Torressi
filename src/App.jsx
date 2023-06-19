import { Footer } from "./components/layout/Footer.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
// import { ItemListContainer } from "./components/page/itemListContainer/ItemListContainer.jsx";
// import { ProductDetailContainer } from "./components/page/productDetail/ProductDetailContainer.jsx";
import { FetchingDeDatosContainer } from "./components/page/fetchingDeDatos/FetchingDeDatosContainer.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer/> */}
      {/* <ProductDetailContainer /> */}
      <FetchingDeDatosContainer />
      <Footer />
    </>
  );
}

export default App;
