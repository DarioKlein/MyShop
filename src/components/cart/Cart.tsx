import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../redux/root-reducer'
import { MdOutlineClose } from 'react-icons/md'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { formatPrice } from '../../utils/dollar-formatter'
import { removeProduct } from '../../redux/cart/cart-slice'
import { Product } from '../productsList/ProductsList'

interface CartProps {
  showCart: boolean
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export function Cart({ showCart, setShowCart }: CartProps) {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
  const dispatch = useDispatch()

  function handleRemoveProductFromCart(product: Product) {
    dispatch(removeProduct(product))
  }

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price
  }, 0)

  return (
    <S.Container showCart={showCart}>
      <S.HeaderCart>
        <S.Title>Carrinho</S.Title>
        <S.CloseCart
          onClick={() => {
            setShowCart(false)
          }}
        >
          <MdOutlineClose />
        </S.CloseCart>
      </S.HeaderCart>

      <S.CartProductsList>
        {cart.map(product => {
          return (
            <S.CartProductItem key={product.id}>
              <S.CartImage src={product.image} />
              <S.ContainerDescriptionProduct>
                <S.TitleProduct>{product.title}</S.TitleProduct>
                <S.PriceProduct> ${formatPrice(product.price)}</S.PriceProduct>
              </S.ContainerDescriptionProduct>
              <S.RemoveProduct onClick={() => handleRemoveProductFromCart(product)}>
                <IoIosRemoveCircleOutline />
              </S.RemoveProduct>
            </S.CartProductItem>
          )
        })}
      </S.CartProductsList>
      <S.CartTotal>Total de produtos: {cart.length < 10 ? `0${cart.length}` : cart.length}</S.CartTotal>
      <S.CartTotal>Total a pagar: ${formatPrice(totalPrice)}</S.CartTotal>
    </S.Container>
  )
}
