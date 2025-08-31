import { type JSX } from 'react'
import * as S from './styles'

export type Props = {
  children: JSX.Element
  img: string
  color?: 'lightBlue' | 'white'
  textDirection?: 'right' | 'left'
}

const Section = ({ img, children, color = 'white', textDirection }: Props) => {
  function directionCheck() {
    if (textDirection === 'left') {
      return 'fade-left'
    } else {
      return 'fade-right'
    }
  }

  return (
    <S.Section $color={color}>
      <S.Content $textDirection={textDirection} data-aos={directionCheck()}>
        <img src={img} alt={img} />
        <div>{children}</div>
      </S.Content>
    </S.Section>
  )
}

export default Section
