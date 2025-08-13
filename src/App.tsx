//utilitários
import { projetos } from './utils/projetos'
import useMediaQuery from './utils/MediaQuery'

//estilos
import { GlobalStyle } from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'

//componentes
import Header from './components/Header'
import Perfil from './components/Perfil'
import Section from './components/Section'
import ProjectList from './components/ProjectList'
import GithubProjectList from './components/GIthubProjectList'
import Footer from './components/Footer'
import Title from './components/Title'

function App() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  isSmallScreen ? Aos.init({ disable: true }) : Aos.init()

  //idiotice
  const playceholder =
    'https://media.discordapp.net/attachments/1279240121597820982/1403589697661435984/874.png?ex=689b6605&is=689a1485&hm=4cea6cc794a8a89cb59640187eacabeeec222f222e70a62e63010a8f1c097b76&=&format=webp&quality=lossless'
  const playceholder2 =
    'https://i.pinimg.com/1200x/bd/cb/3f/bdcb3f389881a33dcfd785716cc61c67.jpg'

  return (
    <>
      <GlobalStyle />
      <Header />
      <Perfil />
      <Section cor="cinza" img={playceholder}>
        <>
          <Title fontSize={24}>Sobre</Title>
          <p>
            Olá. Sou Danilo Machuca, desenvolvedor Front-End apaixonado por
            criar interfaces modernas, rápidas e intuitivas. Trabalho com HTML,
            CSS, JavaScript, React e TypeScript, transformando ideias em
            experiências digitais funcionais e atraentes. Meu objetivo é unir
            design e código para entregar soluções que realmente façam
            diferença.
          </p>
        </>
      </Section>
      <Section cor="branca" img={playceholder2} direcaoDoTexto="esquerda">
        <>
          <Title fontSize={24}>Como eu Trabalho</Title>
          <p>
            Nos meus projetos, priorizo performance, acessibilidade e código
            limpo. Integro APIs REST, aplico boas práticas de desenvolvimento e
            utilizo testes automatizados com Jest e Cypress para garantir
            estabilidade e confiabilidade. Busco sempre criar aplicações que
            sejam eficientes para o cliente e agradáveis para o usuário final.
          </p>
        </>
      </Section>
      <ProjectList projetos={projetos} />
      <GithubProjectList />
      <Footer />
    </>
  )
}

export default App
