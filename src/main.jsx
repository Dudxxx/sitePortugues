import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "../src/pages/Home.css";

// Importação das páginas
import Home from "./pages/Home";
import Autor from "./pages/Autor";
import Livro from "./pages/Livro";
import Personagens from "./pages/Personagens";
import Utfpr from "./pages/Utfpr";
import Professora from "./pages/Professora.jsx";

// Importação do layout principal
import { Pagina } from "./components/Pagina";

// Criação das rotas
const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Pagina />}>
      <Route index element={<Home />} /> {/* Página inicial */}
      <Route path="Livro" element={<Livro />} />
      <Route path="Autor" element={<Autor />} />
      <Route path="Personagens" element={<Personagens />} />
      <Route path="Utfpr" element={<Utfpr />} />
      <Route path="Professora" element={<Professora />} />
    </Route>
  )
);

// Renderização no DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
