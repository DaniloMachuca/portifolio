import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  }
  background-color: ${colors.blue};
  color: ${colors.white};

  h1 {
    font-size: 32px;
    font-weight: bold;
    padding: 8px;
    border: 1px solid ${colors.white};
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 12px;
  padding: 0;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    filter: invert(1);
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: invert(0);
      transition: all 0.2s ease-in-out;
    }
  }
`
