import { useEffect, useState } from 'react'

import Title from '../Title'
import GithubProject from '../GithubProjectCard'
import { List, Container, Color } from './styles'

const GithubProjectList = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/DaniloMachuca/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data)
      })
  }, [])

  return (
    <Color>
      <Container className="container" data-aos="fade-up">
        <Title fontSize={24}>Repositórios do Github</Title>
        <List>
          {repos.map(({ id, name, html_url }) => (
            <li key={id}>
              <GithubProject name={name} html_url={html_url} />
            </li>
          ))}
        </List>
      </Container>
    </Color>
  )
}

export default GithubProjectList
