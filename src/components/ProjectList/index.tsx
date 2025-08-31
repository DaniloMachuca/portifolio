import ProjectCard from '../ProjectCard'
import Projects from '../../models/Projects'
import Title from '../Title'
import * as S from './styles'

type Props = {
  projects: Projects[]
}

const ProjectList = ({ projects }: Props) => {
  return (
    <S.Cor>
      <S.Section className="container" data-aos="fade-up">
        <Title fontSize={24}>Meus Projetos</Title>
        <S.List>
          {projects.map((p) => (
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
    </S.Cor>
  )
}

export default ProjectList
