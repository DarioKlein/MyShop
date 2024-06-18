import styled from 'styled-components'

export const Header = styled.header`
  background-color: navy;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.6rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  & > .dropdown {
    display: none;
  }

  & > .dropdown > button {
    background-color: white;
    color: black;
  }

  & > .dropdown > button:active {
    background-color: white;
    color: black;
  }

  & .dropdown-item:nth-child(1) {
    background-color: violet;
    color: black;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  & .dropdown-item:nth-child(2) {
    color: white;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & .dropdown-menu {
    padding: 0;
  }

  & > .dropdown {
    @media (max-width: 500px) {
      display: flex;
    }
  }
`

interface AuthButtonProps {
  isLogged: boolean
}

export const AuthButton = styled.button<AuthButtonProps>`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 2px 25px;
  background-color: ${props => (props.isLogged ? 'red' : 'green')};
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: green;
  }

  @media (max-width: 500px) {
    display: none;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 2px 25px;
  background-color: violet;
  color: black;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: violet;
  }

  @media (max-width: 500px) {
    display: none;
  }
`
