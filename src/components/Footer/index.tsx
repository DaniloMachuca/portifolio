import * as S from './styles'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <S.SocialMedias>
          <li>
            <a href="https://github.com/DaniloMachuca">
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/danilo-machuca-de-souza/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </S.SocialMedias>
        <S.TitleStyled>Desenvolvido por Danilo Machuca</S.TitleStyled>
        <S.TitleStyled>danilo.machuca.dev@gmail.com</S.TitleStyled>
        <S.TitleStyled>(12) 99650-2006</S.TitleStyled>
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
