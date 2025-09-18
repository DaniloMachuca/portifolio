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
            Olá, meu nome é Danilo Machuca. Sou desenvolvedor Full-Stack e
            estudante de Ciência da Computação na UNIP. Tenho conhecimento em
            HTML, CSS, JavaScript, React, TypeScript, Next.js, Python, C e C++,
            o que me permite atuar em diferentes camadas de uma aplicação. Gosto
            de explorar novas tecnologias e ampliar constantemente meu
            repertório técnico, com interesse em criar soluções completas e
            eficientes para diferentes tipos de projeto.
          </p>
        </>
      </Section>
      <Section color="lightBlue" img={workFlowImg} textDirection="left">
        <>
          <Title fontSize={24}>Como eu Trabalho</Title>
          <p>
            Como desenvolvedor, priorizo performance, acessibilidade e código
            limpo em todas as camadas da aplicação. Desenvolvo e integro APIs,
            aplico boas práticas de arquitetura e manutenção de software e
            utilizo testes automatizados com Jest e Cypress para garantir
            estabilidade e confiabilidade. Meu foco é entregar soluções
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
