import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`

export const Section = styled.section`
  padding: 10px 15px;

  h2 {
    text-align: center;
  }
`
