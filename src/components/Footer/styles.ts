import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.footer`
  padding: 40px 15px;
  text-align: center;
  background-color: ${colors.azul};
  display: flex;
  flex-direction: column;
`
export const SocialMedias = styled.ul`
  justify-content: center;
  display: flex;
  gap: 8px;
  margin-top: 32px;
  align-items: center;
  padding: 0;

  li {
    list-style: none;
    margin: 0 8px;
  }
`

export const Description = styled.p`
  color: ${colors.cinza};
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
  font-size: 10px;
  max-width: 480px;
  padding: 0;
`
