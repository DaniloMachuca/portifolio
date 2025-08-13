import Tag from '../Tag'
import * as S from './styles'
import Title from '../Title'

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
        <Title fontSize={18}>{title}</Title>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
      <Tag isBtn size="big">
        <a href={link}>Acessar Projeto</a>
      </Tag>
    </S.CardContainer>
  )
}

export default ProjectCard
