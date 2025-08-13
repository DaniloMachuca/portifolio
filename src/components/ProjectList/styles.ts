import styled from 'styled-components'
import { Title } from '../Title/styles'
import { colors } from '../../styles'

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    column-gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
    column-gap: 0;
  }
`

export const Section = styled.section`
  padding: 10px 15px;
  overflow-x: hidden;

  ${Title} {
    text-align: center;
  }
`

export const Cor = styled.div`
  background-image: linear-gradient(${colors.branco} 95%, ${colors.cinza} 100%);
  padding-bottom: 140px;
`
