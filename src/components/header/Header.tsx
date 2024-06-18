import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import * as S from './styles'
import { useState } from 'react'
import { Cart } from '../cart/Cart'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux/root-reducer'
import { login, logout } from '../../redux/user/user-slice'

export function Header() {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  const [showCart, setShowCart] = useState(false)
  const isLogged = user !== null

  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: 'Dário Klein',
          email: 'dariokleinalves@gmail.com',
        })
      )
      return
    }

    dispatch(logout({}))
  }

  console.log(user)

  return (
    <S.Header>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton
            onClick={() => {
              setShowCart(!showCart)
            }}
          >
            Carrinho <FiShoppingCart />
          </S.CartButton>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Ver Links
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href=""
                onClick={e => {
                  e.preventDefault()
                  setShowCart(!showCart)
                }}
              >
                Carrinho <FiShoppingCart />
              </Dropdown.Item>
              <Dropdown.Item href="" className={isLogged ? 'bg-danger' : 'bg-success'}>
                {isLogged ? 'Logout' : 'Login'} {isLogged ? <FiLogOut /> : <FiLogIn />}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </S.Header>
  )
}
