import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import imgHome from "../assets/Machado.jpeg"

export function Pagina() {
  const navigate = useNavigate(); 

  const redirectToHome = () => {
    navigate("/");
  };


  return (
    <div className="bg-azul1 w-full h-5">
      <header>
        <nav>
          <img
            src={imgHome}
            alt="Home"
            onClick={redirectToHome}
            style={{ cursor: 'pointer', width: '5%', height: 'auto', borderRadius: '100%'}}
          />
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/Livro")}>Livro</button>
          <button onClick={() => navigate("/Autor")}>Autor</button>
          <button onClick={() => navigate("/Personagens")}>Personagens</button>
          <button onClick={() => navigate("/Utfpr")}>UTFPR</button>
          <button onClick={() => navigate("/Professora")}>Professora</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
