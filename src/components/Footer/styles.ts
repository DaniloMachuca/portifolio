import styled from 'styled-components'
import { colors } from '../../styles'

export const TitleStyled = styled.p`
  color: ${colors.branco};
  font-size: 12px;
  margin-top: 20px;
`

export const Footer = styled.footer`
  padding: 20px 15px;
  text-align: center;
  background-color: ${colors.azul};
  display: flex;
  flex-direction: column;
`
export const SocialMedias = styled.ul`
  justify-content: center;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;

  li {
    list-style: none;
    margin: 0 8px;

    img {
      width: 40px;
      height: 40px;
      filter: invert(1);

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export const Description = styled.p`
  color: ${colors.cinza};
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  max-width: 480px;
  padding: 0;
`
