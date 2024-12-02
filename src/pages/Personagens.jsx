import ilustraLivro from "../assets/ilustracaoImg.jpg";

function Personagens() {
    return (
        <div className="alg">
        <img className="imgIlus" src={ilustraLivro} alt="Esaú e Jaco" />
        <h1 className="top">Principais Personagens</h1>
        <div className='conteinerPerson'>
            
            <div className='itemPerson'>
                <h2>Carta de Pedro</h2><br />
                <p className="carta">Minha querida Flora,

Amo-te com toda a sinceridade de meu coração, ainda que isso me coloque em conflito com Paulo. Ele é impetuoso, enquanto eu busco a calma, mas não confunda minha ponderação com fraqueza: meu amor por ti é verdadeiro e profundo.

Não quero que sejas um troféu desta disputa entre irmãos. Amo-te por quem és, pela paz que trazes ao meu espírito. Se escolher-me, prometo-te devoção e serenidade.

Teu sempre,
Pedro</p>
            </div>
            <div className='itemPerson'>
                <h2>Carta de Paulo</h2><br />
                <p className="carta">Minha querida Flora,

Amo-te com a força de quem vive sem temer. Sei que Pedro tenta envolver-te com sua prudência, mas comigo encontrarás paixão e verdade.

Não nego o conflito com meu irmão, mas meu amor por ti não é parte disso; ele é meu, ardente e inteiro. Escolha-me, Flora, e prometo viver ao teu lado com toda a intensidade que mereces.

Teu,
Paulo</p>
            </div>
            <div className='itemPerson'>
                <h2>Carta de Flora</h2><br />
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