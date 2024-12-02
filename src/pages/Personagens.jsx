import ilustraLivro from "../assets/ilustracaoImg.jpg";

function Personagens() {
    return (
        <div className="alg">
        <img className="imgIlus" src={ilustraLivro} alt="Esaú e Jaco" />
        <h1>Principais Personagens</h1>
        <div className='conteinerPerson'>
            
            <div className='itemPerson'>
                <h2>Pedro</h2>
                <p className="pers">Pedro é um dos gêmeos e representa o conservadorismo e os valores ligados ao Império. Ele é caracterizado como impulsivo, emotivo e teimoso, sempre em conflito direto com seu irmão Paulo, mesmo em questões triviais. Pedro busca afirmar sua visão de mundo e seu domínio em diferentes aspectos da vida, o que o leva a rivalizar constantemente com o irmão, especialmente no campo amoroso. Ele é apaixonado por Flora, mas sua personalidade impulsiva e possessiva dificulta uma conexão genuína com ela. Pedro, em sua jornada, simboliza a resistência às mudanças sociais e políticas que marcam o Brasil do final do século XIX.</p><br />
                <h3>Carta</h3>
                <p className="carta">Minha querida Flora,

Amo-te com toda a sinceridade de meu coração, ainda que isso me coloque em conflito com Paulo. Ele é impetuoso, enquanto eu busco a calma, mas não confunda minha ponderação com fraqueza: meu amor por ti é verdadeiro e profundo.

Não quero que sejas um troféu desta disputa entre irmãos. Amo-te por quem és, pela paz que trazes ao meu espírito. Se escolher-me, prometo-te devoção e serenidade.

Teu sempre,
Pedro</p>
            </div>
            <div className='itemPerson'>
                <h2>Paulo</h2>
                <p className="pers">Paulo é o irmão gêmeo de Pedro e sua antítese. Representa o progresso e os ideais republicanos, sendo mais racional e pragmático que seu irmão. Paulo também se apaixona por Flora, o que aprofunda o antagonismo entre os dois. Sua relação com Pedro é marcada por disputas constantes e por um desejo de afirmação como superior. Paulo simboliza a abertura às novas ideias e à modernidade que moldavam a transição do Brasil do Império para a República. Apesar de seu perfil mais calculista, ele não escapa dos conflitos emocionais que dominam sua vida.</p><br />
                <h3>Carta</h3>
                <p className="carta">Minha querida Flora,

Amo-te com a força de quem vive sem temer. Sei que Pedro tenta envolver-te com sua prudência, mas comigo encontrarás paixão e verdade.

Não nego o conflito com meu irmão, mas meu amor por ti não é parte disso; ele é meu, ardente e inteiro. Escolha-me, Flora, e prometo viver ao teu lado com toda a intensidade que mereces.

Teu,
Paulo</p>
            </div>
            <div className='itemPerson'>
                <h2>Flora</h2>
                <p className="pers">Flora é a figura central da rivalidade amorosa entre Pedro e Paulo. Ela é uma jovem serena, equilibrada e introspectiva, mas sua indecisão em relação a quem escolher entre os dois irmãos reflete sua natureza avessa a extremos. Flora simboliza o ideal de neutralidade e equilíbrio em meio às tensões representadas pelos gêmeos. No entanto, sua incapacidade de tomar partido contribui para o agravamento das disputas entre Pedro e Paulo. Seu desfecho trágico, com sua morte precoce, encerra a possibilidade de resolução para os conflitos entre os irmãos e reforça o tom melancólico e inconclusivo da narrativa.</p><br />
                <h3>Carta</h3>
                <p className="carta">Queridos Pedro e Paulo,

Parto deixando-lhes meu último desejo: que o amor que tiveram por mim não seja causa de rancor, mas de união. Nunca pude escolher entre vocês, pois ambos ocupam partes iguais de meu coração.

Perdoem-me por minhas indecisões e pela dor que causei. Lembrem-se de mim não como um motivo de disputa, mas como alguém que sempre os amou em silêncio.

Com ternura,
Flora</p>
            </div>
        </div>
        </div>
    )
}

export default Personagens;