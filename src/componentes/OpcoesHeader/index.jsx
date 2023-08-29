import { Link } from 'react-router-dom';
import styled from 'styled-components';


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']


const Opções = styled.ul`
    display: flex;
`

const Opção = styled.li`
     font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader() {
    return (
        <Opções>
            {textoOpcoes.map((textodalista) => (
                <Link to={`/${textodalista.toLowerCase()}`}><Opção><p>{textodalista}</p></Opção></Link>
            ))}
        </Opções>
    )
}
export default OpcoesHeader;