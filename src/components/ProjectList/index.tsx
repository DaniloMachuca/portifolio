import * as S from './styles'
import ProjectCard from '../ProjectCard'
import Projetos from '../../models/Projetos'
import Title from '../Title'

type Props = {
  projetos: Projetos[]
}

const ProjectList = ({ projetos }: Props) => {
  return (
    <S.Section className="container" data-aos="fade-up">
      <Title fontSize={24}>Meus Projetos</Title>
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
