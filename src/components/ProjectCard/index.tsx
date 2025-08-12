import Tag from '../Tag'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  link: string
  infos: string[]
}

const ProjectCard = ({ image, title, description, link, infos }: Props) => {
  return (
    <S.CardContainer>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.TextContainer>
        <h3>{title}</h3>
        <S.Description>{description}</S.Description>
        <Tag size="big">
          <a href={link}>Acessar Projeto</a>
        </Tag>
      </S.TextContainer>
    </S.CardContainer>
  )
}

export default ProjectCard
