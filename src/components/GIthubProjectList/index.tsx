import { useEffect, useState } from 'react'

import Title from '../Title'

import { List, Container } from './styles'
import GithubProject from '../GithubProjectCard'

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
  )
}

export default GithubProjectList
