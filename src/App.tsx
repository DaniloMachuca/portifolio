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

//imagens da seção
import sobreImg from './assets/sobre-mim.png'
import trabalhoImg from './assets/trabalho.png'

function App() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  isSmallScreen ? Aos.init({ disable: true }) : Aos.init()

  return (
    <>
      <GlobalStyle />
      <Header />
      <Perfil />
      <Section cor="cinza" img={sobreImg}>
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
      <Section cor="branca" img={trabalhoImg} direcaoDoTexto="esquerda">
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
