import profilePic from '../../assets/foto-perfil.jpg'
import * as S from './styles'

const Profile = () => {
  return (
    <S.Container>
      <img src={profilePic} alt="Danilo Machuca" />
      <h1>Danilo Machuca</h1>
      <h4>
        Desenvolvedor Full-Stack | HTML/CSS/JS, React, TypeScript, Go, Python e
        Node
      </h4>
    </S.Container>
  )
}

export default Profile
