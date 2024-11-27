import imgLivro from "../assets/EsauJaco.jpeg";

export default function Livro() {
    return (
      <div className="livro">
        <div className="informacaoLivro">
          <img
            src={imgLivro}
            className="itensLivro img"
            alt="Livro"
          />
          <h3 className="itensLivro">Informações sobre o livro</h3>
          <p className="itensLivro">
            <b>Data de publicação:</b> 1904; <br />
            <b>Gêneros:</b> Romance, Realismo, Ficção psicológica; <br />
            <b>Editora:</b> O livro foi publicado originalmente pela Livraria Garnier; <br />
            <b>Idioma:</b> Português;<br />
            <b>País:</b> Brasil; <br />  
            <em>Compre Aqui: <a href="https://www.amazon.com.br/Esa%C3%BA-Jac%C3%B3-Machado-Assis/dp/6555528982">Esaú e Jacó</a> </em></p>
          {/* <h4 className="itensLivro">Compre aqui: 
          <a href=""></a></h4> */}
        </div>
        <div className="sobreLivro">
          <h1>Sobre o livro</h1>
          <p className="itensSobre">Esaú e Jacó foi publicado em 1904, sendo o penúltimo romance de Machado de Assis e uma das obras mais emblemáticas de sua fase madura. A narrativa é conduzida por um narrador onisciente chamado Aires, que adota um tom reflexivo e irônico para explorar os conflitos e peculiaridades de Pedro e Paulo, dois irmãos gêmeos que, desde o ventre materno, vivem em constante antagonismo. O romance é uma metáfora das disputas humanas, em especial das divergências ideológicas, políticas e emocionais.</p>

          <p className="itensSobre">A história é centrada na oposição constante entre os irmãos, que personificam visões de mundo opostas e frequentemente entram em conflito por suas crenças e ambições. Pedro é mais impulsivo e emotivo, enquanto Paulo é mais racional e pragmático. Essa dualidade permeia todos os aspectos de suas vidas, incluindo a disputa pelo amor de Flora, uma jovem delicada que não se decide por nenhum dos dois, um reflexo de sua natureza equilibrada e avessa a extremos.</p>

          <p className="itensSobre">A trama também se desenrola em um contexto político e social repleto de mudanças, pois abrange o período de transição do Brasil do Império para a República. Pedro e Paulo, como representantes de ideais distintos, simbolizam essa polarização histórica: Pedro é ligado ao conservadorismo e ao passado imperial, enquanto Paulo é alinhado às ideias republicanas e progressistas.</p>
        </div>
      </div>
    );
  }