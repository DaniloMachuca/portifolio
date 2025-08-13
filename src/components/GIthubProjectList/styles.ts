import styled from 'styled-components'
import { Title } from '../Title/styles'
import { colors } from '../../styles'

export const Container = styled.div`
  padding: 0px 15px 32px 15px;
  > ${Title} {
    text-align: center;
  }
  overflow-x: hidden;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;
  list-style: none;
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
export const Cor = styled.div`
  background-image: linear-gradient(${colors.cinza} 90%);
`
