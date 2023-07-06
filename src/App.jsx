import { Layout } from "./components/layout/Layout.jsx";
import { NotFound } from "./components/page/404NotFound/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuRoutes } from "./Routes/menuRoutes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {menuRoutes.map(({id, path, Element}) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
