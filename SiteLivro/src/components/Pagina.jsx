// import React from "react";
// import { useNavigate } from "react-router-dom"; // Certifique-se de importar de react-router-dom

// export function Pagina() {
//   const navigate = useNavigate(); // Função correta: useNavigate()

//   return (
//     <div>
//       <h1>Página de Exemplo</h1>
//       {/* Navegação ao clicar no botão */}
//       <button onClick={() => navigate("/Livro")}>Ir para Livro</button>
//     </div>
//   );
// }


import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export function Pagina() {
  const navigate = useNavigate(); // Inicializa o useNavigate

  return (
    <div>
      <header>
        <h1>Bem-vindo ao site</h1>
        <nav>
          {/* Botões para navegação */}
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/Livro")}>Livro</button>
          <button onClick={() => navigate("/Autor")}>Autor</button>
          <button onClick={() => navigate("/Personagens")}>Personagens</button>
          <button onClick={() => navigate("/Utfpr")}>UTFPR</button>
          <button onClick={() => navigate("/Professora")}>Professora</button>
        </nav>
      </header>
      <main>
        {/* Outlet renderiza as rotas filhas */}
        <Outlet />
      </main>
    </div>
  );
}
