import profilePic from '../../assets/foto-perfil.jpg'
import * as S from './styles'

const Profile = () => {
  return (
    <S.Container>
      <img src={profilePic} alt="Danilo Machuca" />
      <h1>Danilo Machuca</h1>
      <h4>Desenvolvedor Front-End | HTML/CSS/JS, React, TypeScript, Sass</h4>
    </S.Container>
  )
}

export default Profile
