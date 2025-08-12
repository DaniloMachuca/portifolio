import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  align-items: center;
  gap: 1rem;
  text-align: center;
  background-color: ${colors.cinza};
  background-image: linear-gradient(${colors.cinza} 80%, ${colors.branco} 100%);
  padding: 34px 0px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  h1 {
    font-size: 2rem;
  }
`
