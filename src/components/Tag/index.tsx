import type { JSX } from 'react/jsx-runtime'
import * as S from './styles'

type Props = {
  size?: 'small' | 'big'
  isBtn?: boolean
  children: JSX.Element | string
  onClick?: () => void
}

const Tag = ({ children, size = 'small', isBtn = false, onClick }: Props) => {
  return (
    <S.TagContainer onClick={onClick} $isBtn={isBtn} $size={size}>
      {children}
    </S.TagContainer>
  )
}

export default Tag
