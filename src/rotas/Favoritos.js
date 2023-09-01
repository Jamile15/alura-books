import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../servicos/favoritos';
import { Titulo } from '../componentes/Titulo';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

const ResultadoContainer = styled.div`

`

const Resultado = styled.div`
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    try {
      const favoritosDaAPI = await getFavoritos();
      console.log('Dados recebidos da API:', favoritosDaAPI);
      setFavoritos([favoritosDaAPI]);
    } catch (error) {
      console.error('Erro ao buscar favoritos:', error);
    }
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {favoritos.map(favorito => (
          <Resultado key={favorito.id}>
            <p>{favorito.nome}</p>
          </Resultado>
        ))}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;
