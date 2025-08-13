import Tag from '../Tag'
import Title from '../Title'
import { Card } from './styles'

type Props = {
  id?: number
  name: string
  html_url?: string
}

const GithubProject = (props: Props) => {
  return (
    <Card>
      <Title>{props.name}</Title>
      <Tag isBtn size="big">
        <a href={props.html_url}>Visualizar</a>
      </Tag>
    </Card>
  )
}

export default GithubProject
