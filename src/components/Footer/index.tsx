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
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Description>
      </div>
    </S.Footer>
  )
}

export default Footer
