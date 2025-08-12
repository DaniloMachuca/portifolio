import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15%;
  background-color: ${colors.azul};
  color: ${colors.branco};
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`
