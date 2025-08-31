import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.blue};

  img {
    width: 100%;
    height: 300px;
    border-bottom: 1px solid ${colors.blue};
    object-fit: cover;
  }

  background-color: ${colors.white};

  align-items: center;
  text-align: center;
  > ${TagContainer} {
    width: 100%;
    padding: 8px 0;
  }
  justify-content: space-between;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`
export const Nota = styled.div`
  display: flex;
  gap: 4px;
  font-weight: bold;
`

export const CardHeader = styled.div`
  border-bottom: 1px solid ${colors.blue};

  > div {
    position: relative;
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  text-align: left;
  bottom: 8px;
  left: 8px;

  ${TagContainer} {
    margin-bottom: 8px;
    margin-right: 8px;
  }
`
