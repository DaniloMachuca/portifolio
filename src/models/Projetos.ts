class Projetos {
  title: string
  description: string
  image: string
  link: string
  id: number
  infos: string[]

  constructor(
    title: string,
    description: string,
    image: string,
    link: string,
    id: number,
    infos: string[]
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.link = link
    this.id = id
    this.infos = infos
  }
}

export default Projetos
