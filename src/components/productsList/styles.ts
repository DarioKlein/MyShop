import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1240px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin: 4rem auto;
  padding: 0 2rem;
`
export const Loader = styled.div`
  width: 100%;
  height: calc(90vh - 60px - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
`
