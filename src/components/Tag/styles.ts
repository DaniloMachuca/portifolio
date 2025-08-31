import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  $size?: 'big' | 'small'
  $isBtn?: boolean
}
export const TagContainer = styled.div<Props>`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: ${(props) => (props.$size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  transition: all 0.2s ease-in-out;

  a {
    color: ${colors.white};
    text-decoration: none;
  }

  ${(props) =>
    props.$isBtn
      ? `&:hover {background-color: ${colors.darkBlue} ; cursor: pointer;}`
      : ''}
`
