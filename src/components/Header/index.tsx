import * as S from './styles'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import Logo from '../Logo'

const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <Logo />
        <S.List>
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
          <li>
            <p>danilo.machuca.dev@gmail.com</p>
          </li>
        </S.List>
      </div>
    </S.Header>
  )
}

export default Header
