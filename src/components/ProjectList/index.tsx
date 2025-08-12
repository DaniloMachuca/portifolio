import ProjectCard from '../ProjectCard'
import Projetos from '../../models/Projetos'
import * as S from './styles'

import 'aos/dist/aos.css'
import AOS from 'aos'

type Props = {
  projetos: Projetos[]
}

const ProjectList = ({ projetos }: Props) => {
  AOS.init()
  return (
    <S.Section className="container" data-aos="fade-up">
      <h2>Meus Projetos</h2>
      <S.List>
        {projetos.map((p) => (
          <ProjectCard
            key={p.id}
            description={p.description}
            link={p.link}
            image={p.image}
            title={p.title}
            infos={p.infos}
          />
        ))}
      </S.List>
    </S.Section>
  )
}

export default ProjectList
