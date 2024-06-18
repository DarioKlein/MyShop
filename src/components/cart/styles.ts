import styled from 'styled-components'

interface ContainerProps {
  showCart: boolean
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${props => (props.showCart ? '0' : '-315px')};
  width: 315px;
  background-color: white;
  height: 100vh;
  padding: 2rem;

  transition: 0.3s ease-in-out;
  overflow: auto;
`

export const HeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2rem;
`

export const CloseCart = styled.button`
  border: none;
  background: none;
  width: 30px;
  & > svg {
    width: 100%;
    height: 100%;
    color: red;
    &:hover {
      transform: scale(1.25);
      transition: 0.2s ease-in-out;
    }
  }
`

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartProductItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`

export const CartImage = styled.img`
  width: 35px;
  height: 50px;
`

export const ContainerDescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const TitleProduct = styled.strong`
  width: 140px;
  white-space: nowrap; /* impede a quebra de linha */
  overflow: hidden; /* esconde o conteúdo excedente */
  text-overflow: ellipsis; /* adiciona as reticências (...) */
`

export const PriceProduct = styled.span``

export const RemoveProduct = styled.button`
  border: none;
  background: none;
  width: 25px;
  & > svg {
    width: 100%;
    height: 100%;
    color: red;
    &:hover {
      transform: scale(1.25);
      transition: 0.2s ease-in-out;
    }
  }
`

export const CartTotal = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`
