import type { JSX } from 'react/jsx-runtime'
import * as S from './styles'

type Props = {
  size?: 'small' | 'big'
  isBtn?: boolean
  children: JSX.Element | string
}

const Tag = ({ children, size = 'small', isBtn = false }: Props) => {
  return (
    <S.TagContainer $isBtn={isBtn} $size={size}>
      {children}
    </S.TagContainer>
  )
}

export default Tag
