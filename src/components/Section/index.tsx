import { type JSX } from 'react'
import * as S from './styles'

export type Props = {
  children: JSX.Element
  img: string
  cor?: 'cinza' | 'branca'
  direcaoDoTexto?: 'direita' | 'esquerda'
}

const Section = ({ img, children, cor = 'branca', direcaoDoTexto }: Props) => {
  function directionCheck() {
    if (direcaoDoTexto === 'esquerda') {
      return 'fade-left'
    } else {
      return 'fade-right'
    }
  }

  return (
    <S.Section $cor={cor}>
      <S.Content $direcaoDoTexto={direcaoDoTexto} data-aos={directionCheck()}>
        <img src={img} alt={img} />
        <div>{children}</div>
      </S.Content>
    </S.Section>
  )
}

export default Section
