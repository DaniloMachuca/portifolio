import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  $cor: 'cinza' | 'branca'
  $direcaoDoTexto?: 'direita' | 'esquerda'
}

export const Section = styled.section<Omit<Props, 'direcaoDoTexto'>>`
  padding: 10px 15px;
  background-color: ${({ $cor }) =>
    $cor === 'cinza' ? colors.cinza : colors.branco};
  background-image: linear-gradient(
    ${({ $cor }) =>
      $cor === 'cinza'
        ? `${colors.branco} 90%, ${colors.cinza} 100%`
        : `${colors.cinza} 90%, ${colors.branco} 100%`}
  );
`
export const Content = styled.div<Omit<Props, '$cor'>>`
  max-width: 1200px;
  display: flex;
  flex-direction: ${({ $direcaoDoTexto }) =>
    $direcaoDoTexto === 'esquerda' ? 'row-reverse' : 'row'};
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 5%;
  overflow: hidden;

  div {
    max-width: 40%;

    p {
      font-size: 16px;
    }
  }

  img {
    max-width: 40%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    img {
      max-width: 100%;
    }
    div {
      max-width: 100%;
    }
  }
`
