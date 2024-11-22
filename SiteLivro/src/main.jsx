import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import Home from './pages/Home';
import Autor from './pages/Autor';
import Livro from './pages/Livro';
import Personagens from './pages/Personagens';
import Utfpr from './pages/Utfpr';
import Professora from './pages/Professora.jsx';
import './index.css';


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="Livro" element={<Livro />} />
      <Route path="Autor" element={<Autor />} />
      <Route path="Personagens" element={<Personagens />} />
      <Route path="Utfpr" element={<Utfpr />} />
      <Route path="Professora" element={<Professora />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);