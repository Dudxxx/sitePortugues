import imgAutor from "../assets/MachadoAssis.png";

function Autor() {
    return (
        <div className="containerAutor">
            <div className="infoAutor">
                <img className="autor" src={imgAutor} alt="Machado de Assis" />
                <h2>Joaquim Maria Machado de Assis</h2>
                <h3>Principais Obras</h3>
                <ul>
                    <li className="principaisObras"> O Alienista (1882) </li>
                    <li className="principaisObras">Dom Casmurro (1889) </li>
                    <li className="principaisObras">Quincas Borba (1891) </li>
                    <li className="principaisObras">Helena (1876) </li>
                    <li className="principaisObras">Pai contra mãe (1906) </li>
                    <li className="principaisObras">Esaú e Jacó (1904) </li>
                </ul>
            </div>
            <div className="biografiaAutor">
                <h2>Biografia</h2>

                <p><b>Joaquim Maria Machado de Assis</b> nasceu no dia <b>21 de junho de 1839</b>, no Rio de Janeiro, Brasil, e faleceu em <b>29 de setembro de 1908</b>, na mesma cidade. Reconhecido como um dos maiores escritores da literatura brasileira e universal, Machado de Assis foi romancista, poeta, dramaturgo, contista, cronista, jornalista e crítico literário.</p>
                <p>Machado de Assis nasceu em uma família humilde. Seu pai<b>( Francisco José de Assis )</b> era pintor de paredes e sua mãe<b>( Maria Leopoldina da Câmara Machado )</b>, uma lavadeira. Ficou órfão de mãe muito cedo e cresceu no Morro do Livramento, no Rio de Janeiro, em um ambiente marcado por dificuldades financeiras. Machado teve acesso limitado à educação formal e foi autodidata, aprendendo a ler e escrever com ajuda de sua madrinha e frequentando escolas públicas por um breve período.</p>
                <p>Desde cedo, demonstrou interesse pela literatura e começou a trabalhar em uma tipografia, onde teve contato com livros e escritores da época. Foi nesse ambiente que iniciou sua carreira literária e jornalística.</p>
                <p>Em 1869, Machado <b>casou-se com Carolina Augusta Xavier de Novais</b>, uma portuguesa que teve grande influência em sua vida pessoal e literária. O casamento foi sólido e duradouro, mas o casal não teve filhos. Carolina faleceu em 1904, causando grande tristeza ao escritor.</p>
                <p>Machado de Assis <b>sofria de epilepsia</b> e, ao longo de sua vida, enfrentou o preconceito racial, pois era negro em uma sociedade marcada por desigualdades e discriminações. Apesar disso, conquistou o respeito de sua época, tornando-se uma figura central na literatura brasileira.</p>
            </div>
        </div>
    )
}

export default Autor;