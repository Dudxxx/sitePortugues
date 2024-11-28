import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import imgHome from "../assets/Machado.jpeg";

export function Pagina() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };
  

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="esquerda">
            <img
              src={imgHome}
              alt="Home"
              onClick={redirectToHome}
              className="logo"
            />
          </div>
          <ul class="nav-list">
            <li><button className="nav-item" onClick={() => navigate("/Livro")}>Livro</button></li>
            <li><button className="nav-item" onClick={() => navigate("/Autor")}>Autor</button></li>
            <li><button className="nav-item" onClick={() => navigate("/Personagens")}>Personagens</button></li>
            <li><button className="nav-item" onClick={() => navigate("/Professora")}>Professora</button></li>
            <li><button className="nav-item" onClick={() => navigate("/Utfpr")}>UTFPR</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
