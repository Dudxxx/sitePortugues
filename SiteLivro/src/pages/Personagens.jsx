import ilustraLivro from "../assets/ilustracaoImg.jpg";

function Personagens() {
    return (
        <div className='conteinerPerson'>
            <div className='itemPerson'>
                <h2>Pedro</h2>
                <p>Pedro é um dos gêmeos e representa o conservadorismo e os valores ligados ao Império. Ele é caracterizado como impulsivo, emotivo e teimoso, sempre em conflito direto com seu irmão Paulo, mesmo em questões triviais. Pedro busca afirmar sua visão de mundo e seu domínio em diferentes aspectos da vida, o que o leva a rivalizar constantemente com o irmão, especialmente no campo amoroso. Ele é apaixonado por Flora, mas sua personalidade impulsiva e possessiva dificulta uma conexão genuína com ela. Pedro, em sua jornada, simboliza a resistência às mudanças sociais e políticas que marcam o Brasil do final do século XIX.</p>
            </div>
            <div className='itemPerson'>
                <h2>Paulo</h2>
                <p>Paulo é o irmão gêmeo de Pedro e sua antítese. Representa o progresso e os ideais republicanos, sendo mais racional e pragmático que seu irmão. Paulo também se apaixona por Flora, o que aprofunda o antagonismo entre os dois. Sua relação com Pedro é marcada por disputas constantes e por um desejo de afirmação como superior. Paulo simboliza a abertura às novas ideias e à modernidade que moldavam a transição do Brasil do Império para a República. Apesar de seu perfil mais calculista, ele não escapa dos conflitos emocionais que dominam sua vida.</p>
            </div>
            <div className='itemPerson'>
                <h2>Flora</h2>
                <p>Flora é a figura central da rivalidade amorosa entre Pedro e Paulo. Ela é uma jovem serena, equilibrada e introspectiva, mas sua indecisão em relação a quem escolher entre os dois irmãos reflete sua natureza avessa a extremos. Flora simboliza o ideal de neutralidade e equilíbrio em meio às tensões representadas pelos gêmeos. No entanto, sua incapacidade de tomar partido contribui para o agravamento das disputas entre Pedro e Paulo. Seu desfecho trágico, com sua morte precoce, encerra a possibilidade de resolução para os conflitos entre os irmãos e reforça o tom melancólico e inconclusivo da narrativa.</p>
            </div>
            <img className="imgIlus" src={ilustraLivro} alt="Esaú e Jaco" />
        </div>
    )
}

export default Personagens;