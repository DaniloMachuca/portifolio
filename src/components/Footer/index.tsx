import * as S from './styles'
import github from '../../assets/github.svg'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <S.SocialMedias>
          <li>
            <img src={github} alt="github" />
          </li>
          <li>
            <img src={gmail} alt="gmail" />
          </li>
          <li>
            <img src={linkedin} alt="linkedin" />
          </li>
        </S.SocialMedias>
        <S.TitleStyled>Desenvolvido por Danilo Machuca</S.TitleStyled>
        <S.Description>
          Obrigado pela visita! Como desenvolvedor frontend, meu objetivo é
          construir experiências de usuário intuitivas e eficientes. Se você
          precisa de um profissional para transformar designs em código de alta
          qualidade, vamos conversar. Fico à disposição para discutir seu
          próximo projeto.
        </S.Description>
      </div>
    </S.Footer>
  )
}

export default Footer
