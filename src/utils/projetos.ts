import type Projetos from '.././models/Projetos'
import eFoodImg from '../assets/efood.png'
import disneyImg from '../assets/disney.png'
import desenvolvimentoAutomotivoImg from '../assets/desenvolvimento-automotivo.png'
import listaDeContatos from '../assets/lista-de-contatos.png'
import eplay from '../assets/eplay.png'

export const projetos: Projetos[] = [
  {
    id: 1,
    title: 'eFood',
    description:
      'eFood é uma aplicação web construída com React, TypeScript e Vite, criada para servir como base moderna e eficiente para projetos front-end. O projeto foca em uma estrutura organizada e configurada para facilitar o desenvolvimento e a escalabilidade.',
    image: eFoodImg,
    link: 'https://e-food-umber.vercel.app/',
    infos: ['React', 'TypeScript', 'integração com API', 'Styled-Components']
  },
  {
    id: 2,
    title: 'Clone Visual Disney +',
    description:
      'Disney+ Clone é uma aplicação web desenvolvida com sass e javascript para recriar a interface do serviço de streaming Disney+, com foco em praticar conceitos de desenvolvimento front-end, responsividade e organização de código. O projeto busca oferecer uma experiência visual próxima ao original, adaptada para diferentes dispositivos.',
    image: disneyImg,
    link: 'https://disneyplus-clone-olive.vercel.app/',
    infos: ['Sass', 'BEM', 'SMACSS', 'JS', 'HTML', 'SCSS', 'Gulp']
  },
  {
    id: 3,
    title: 'Análise do Desenvolvimento Automotivo',
    description:
      'Site institucional responsivo desenvolvido em HTML5 e SCSS para apresentar uma análise sobre o impacto da indústria automotiva no desenvolvimento do Vale do Paraíba. Inclui seções com dados históricos, mapas, gráficos e acesso ao PDF do trabalho, utilizando AOS para animações e foco em clareza visual.',
    image: desenvolvimentoAutomotivoImg,
    link: 'https://desenvolvimenteo-automotivo.vercel.app/',
    infos: ['Sass', 'BEM', 'SMACSS', 'HTML', 'SCSS', 'Parcel']
  },
  {
    id: 4,
    title: 'Lista de Contatos',
    description:
      'Aplicação de gerenciamento de contatos desenvolvida com React e TypeScript, utilizando Styled Components para estilização. Permite adicionar, editar e excluir contatos, com validação de formulários e armazenamento no localStorage. Criada para praticar conceitos de componentes, estilização e gerenciamento de estado no front-end.',
    image: listaDeContatos,
    link: 'https://lista-de-contatos-react-rho.vercel.app/',
    infos: ['React', 'TypeScript', 'React Router', 'Redux', 'localStorage']
  },
  {
    id: 5,
    title: 'E-commerce eplay',
    description:
      'Eplay é um e-commerce fictício desenvolvido com React, TypeScript e React Router DOM. O projeto possui múltiplas páginas, incluindo listagem de produtos, detalhes individuais e carrinho de compras, com integração a uma API fictícia para simular dados dinâmicos. Utiliza Styled Components para estilização modular e aplica boas práticas de front-end, como organização de componentes, gerenciamento de estado e consumo de APIs, sendo criado como um projeto de treino para aprimorar habilidades em desenvolvimento web moderno.',
    image: eplay,
    link: '',
    infos: [
      'React',
      'TypeScript',
      'React Router',
      'Styled-Components',
      'API',
      'cypress'
    ]
  }
]
