import * as S from './styles'
import fotoPerfil from '../../assets/foto-perfil.jpg'

const Perfil = () => {
  return (
    <S.Container>
      <img src={fotoPerfil} alt="Danilo Machuca" />
      <h1>Danilo Machuca</h1>
      <h4>Desenvolvedor Front-End | HTML/CSS/JS, React, TypeScript, Sass</h4>
    </S.Container>
  )
}

export default Perfil
