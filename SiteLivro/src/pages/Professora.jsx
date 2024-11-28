import livro from "../assets/livro.png";
import prof from "../assets/profSandra.jpg";
function Professora() {
    return (
        <div className="conteinerProf"> 
            <div className="professora">
                <h3>Professora Sandra Elis Aleixo</h3>
                <img className="profImg" src={prof} alt="ProfSandra" />
                <div className="iconLeft">
                    <img className="icon" src={livro} alt="iconLivro" />
                    <h3>Língua Portuguesa</h3>
                </div>
                <p><b>Formação:</b>&nbsp; Possui graduação em Letras Anglo Portuguesas pela Faculdade Estadual de Ciências e Letras de Campo Mourão(1996), especialização em Literatura Brasileira pela Faculdade Estadual de Ciências e Letras de Campo Mourão(1998) e mestradopela Universidade Estadual Paulista Júlio de Mesquita Filho(2002). Atualmente é professora da Universidade Tecnológica Federal do Paraná.</p>
                
            </div>
            <div className="origemPortugues">
                <h1>Origem do Português</h1>
                <p>A língua portuguesa é um idioma derivado do latim vulgar, que se consolidou ao longo dos séculos como a língua oficial de Portugal e do Brasil, sendo também falada em vários outros países ao redor do mundo, como Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe e Timor-Leste. Essa disseminação é resultado do processo de colonização portuguesa, que expandiu a influência do idioma para diversos continentes.</p>

                <p>
                O português é conhecido por suas inúmeras variações regionais, que incluem diferenças no vocabulário, na pronúncia e nos sotaques, refletindo a diversidade cultural dos povos que o adotaram. Apesar dessas variações, o idioma mantém uma unidade que permite a comunicação entre seus falantes, graças à gramática e estrutura básica compartilhada.</p>

                <p>
                Na disciplina de Língua Portuguesa, exploramos diversos aspectos do idioma, como a gramática, que fornece as regras para o uso correto das palavras e construções; a literatura, que nos conecta às grandes obras e autores de diferentes épocas; e a produção de texto, que desenvolve nossa habilidade de nos expressarmos com clareza e criatividade. Além disso, a interpretação de textos é uma parte essencial do aprendizado, pois nos ensina a compreender as nuances, os significados implícitos e as intenções por trás de diferentes tipos de textos, desde os literários até os informativos.</p>

                <p>
                O estudo da Língua Portuguesa nos capacita a escrever bem, analisar criticamente o que lemos e comunicar-nos de maneira eficaz, habilidades fundamentais tanto no ambiente acadêmico quanto no cotidiano. Essa disciplina é uma ferramenta poderosa para entendermos não apenas o idioma, mas também o mundo ao nosso redor, por meio das palavras e das ideias que elas expressam.</p>

            </div>
        </div>
    );
}

export default Professora;