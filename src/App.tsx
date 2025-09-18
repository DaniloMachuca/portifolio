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
            Olá. Meu nome é Danilo Machuca, sou desenvolvedor Full-Stack em
            formação em Ciência da Computação pela UNIP. Trabalho com HTML, CSS,
            JavaScript, React, TypeScript, NextJS, Go, Python, Node, C e C++,
            transformando ideias em experiências digitais funcionais e
            convenientes. Meu objetivo é unir criatividade e código para
            entregar soluções que realmente façam diferença.
          </p>
        </>
      </Section>
      <Section color="lightBlue" img={workFlowImg} textDirection="left">
        <>
          <Title fontSize={24}>Como eu Trabalho</Title>
          <p>
            Como desenvolvedor full stack, priorizo performance, acessibilidade
            e código limpo em todas as camadas da aplicação. Desenvolvo e
            integro APIs, aplico boas práticas de arquitetura e manutenção de
            software e utilizo testes automatizados com Jest e Cypress para
            garantir estabilidade e confiabilidade. Meu foco é entregar soluções
            completas, eficientes para o cliente e com uma experiência agradável
            para o usuário final.
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
