import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  $color: 'lightBlue' | 'white'
  $textDirection?: 'right' | 'left'
}

export const Section = styled.section<Omit<Props, 'textDirection'>>`
  padding: 10px 15px;
  background-color: ${({ $color }) =>
    $color === 'lightBlue' ? colors.lightBlue : colors.white};
  background-image: linear-gradient(
    ${({ $color }) =>
      $color === 'white'
        ? `${colors.white} 90%, ${colors.lightBlue} 100%`
        : `${colors.lightBlue} 90%, ${colors.white} 100%`}
  );
`
export const Content = styled.div<Omit<Props, '$color'>>`
  max-width: 1024px;
  display: flex;
  flex-direction: ${({ $textDirection }) =>
    $textDirection === 'left' ? 'row-reverse' : 'row'};
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 5%;
  overflow: hidden;

  div {
    max-width: 50%;

    p {
      font-size: 16px;
    }
  }

  img {
    max-width: 35%;
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
