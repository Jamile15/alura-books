import { Titulo } from '../Titulo';
import { livrosUL } from './dadosUltimosLancamentos';
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>

            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            > Últimos lançamentos</Titulo>

            <NovosLivrosContainer>
                {
                    livrosUL.map(livro => (
                        <img src={livro.src} />
                    ))
                }
            </NovosLivrosContainer>


        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;