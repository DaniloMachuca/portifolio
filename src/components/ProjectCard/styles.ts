import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.li`
  display: flex-box;
  flex-direction: column;
  border: 1px solid ${colors.azul};
  > img {
    width: 100%;
  }
  position: relative;
  background-color: ${colors.branco};
`

export const TextContainer = styled.div`
  padding: 8px;

  a {
    color: ${colors.branco};
    text-decoration: none;
  }
`
export const Nota = styled.div`
  display: flex;
  gap: 4px;
  font-weight: bold;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-align: center;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
