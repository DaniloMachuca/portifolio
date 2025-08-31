import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  align-items: center;
  gap: 1rem;
  text-align: center;
  background-color: ${colors.lightBlue};
  background-image: linear-gradient(
    ${colors.lightBlue} 80%,
    ${colors.white} 100%
  );
  padding: 34px 0px;
  padding-bottom: 100px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid ${colors.blue};
  }

  h1 {
    font-size: 2rem;
  }

  h4 {
    font-size: 14px;
    font-weight: normal;
  }
`
