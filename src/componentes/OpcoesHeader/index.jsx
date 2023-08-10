import './estilo.css'
const textoOpcoes= ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((textodalista) => (
                <li className='opcao'><p>{textodalista}</p></li>
            ))}
        </ul>
    )
}
export default OpcoesHeader;