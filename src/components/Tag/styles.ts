import styled from 'styled-components'
import { colors } from '../../styles'

import type { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.azul};
  color: ${colors.branco};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;

  a {
    color: ${colors.azul};
    text-decoration: none;
  }
`
