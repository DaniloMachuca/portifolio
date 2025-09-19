//utilitários
import { projects } from './utils/projects'
import useMediaQuery from './utils/MediaQuery'

//estilos
import { GlobalStyle } from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'

//componentes
import Header from './components/Header'
import Profile from './components/Profile'
import Section from './components/Section'
import ProjectList from './components/ProjectList'
import GithubProjectList from './components/GIthubProjectList'
import Footer from './components/Footer'
import Title from './components/Title'

//imagens da seção
import aboutImg from './assets/sobre-mim.png'
import workFlowImg from './assets/trabalho.png'

function App() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  isSmallScreen ? Aos.init({ disable: true }) : Aos.init()

  return (
    <>
      <GlobalStyle />
      <Header />
      <Profile />
      <Section color="white" img={aboutImg}>
        <>
          <Title fontSize={24}>Sobre</Title>
          <p>
            Olá, meu nome é Danilo Machuca. Sou desenvolvedor Front-end e
            estudante de Ciência da Computação na UNIP. Trabalho com HTML, CSS,
            JavaScript, React, TypeScript e Next.js, criando interfaces
            modernas, responsivas e bem estruturadas. Tenho interesse em
            expandir meu conhecimento técnico e explorar novas tecnologias para
            desenvolver aplicações cada vez mais completas e eficientes,
            entregando uma experiência de uso de alta qualidade.
          </p>
        </>
      </Section>
      <Section color="lightBlue" img={workFlowImg} textDirection="left">
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
      <ProjectList projects={projects} />
      <GithubProjectList />
      <Footer />
    </>
  )
}

export default App
