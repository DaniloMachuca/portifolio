import { GlobalStyle } from './styles'
import Perfil from './components/Perfil'
import Header from './components/Header'
import Section from './components/Section'
import Section2img from './assets/Frontend-image.png'
import ProjectList from './components/ProjectList'
import { projetos } from './projetos'
import Footer from './components/Footer'

const playceholder =
  'https://media.discordapp.net/attachments/1279240121597820982/1403589697661435984/874.png?ex=689b6605&is=689a1485&hm=4cea6cc794a8a89cb59640187eacabeeec222f222e70a62e63010a8f1c097b76&=&format=webp&quality=lossless'

const playceholder2 =
  'https://i.pinimg.com/1200x/bd/cb/3f/bdcb3f389881a33dcfd785716cc61c67.jpg'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Perfil />
      <Section cor="cinza" img={playceholder}>
        <>
          <h1>Título foda</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            consequatur quo ea atque maiores labore a voluptas, veritatis nihil
            corporis, quas veniam eius. Natus earum debitis in aperiam iste
            nesciunt?
          </p>
        </>
      </Section>
      <Section cor="branca" img={playceholder2} direcaoDoTexto="esquerda">
        <>
          <h1>Título foda2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            ipsam eum, asperiores, facere, molestias quaerat commodi vero
            placeat quas quisquam soluta? Dolorem inventore asperiores
            repellendus saepe quasi maxime sed sint?
          </p>
        </>
      </Section>
      <ProjectList projetos={projetos} />
      <Footer />
    </>
  )
}

export default App
