import { FiShoppingCart } from 'react-icons/fi'
import * as S from './styles'
import { Product } from '../productsList/ProductsList'
import { GoStar, GoStarFill } from 'react-icons/go'
import { TailSpin } from 'react-loader-spinner'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux/root-reducer'
import { addProduct, removeProduct } from '../../redux/cart/cart-slice'

export function ProductCard({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(true)

  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
  const dispatch = useDispatch()

  const isProductOnCart = cart.find(productCart => productCart.id === product.id) !== undefined

  function showStars() {
    return Array.from({ length: 5 }).map((_, index) => {
      return index < Math.round(product.rating.rate) ? <GoStarFill key={index} /> : <GoStar key={index} />
    })
  }

  function handleAddProductToCart() {
    dispatch(addProduct(product))
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product))
  }

  return (
    <>
      <TailSpin color="blue" height={200} width={200} visible={isVisible} />
      <S.Card
        onLoad={() => {
          setIsVisible(false)
        }}
      >
        <S.ProductImage src={product.image} alt="" />

        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ReviewPriceContainer>
          <S.Review>
            {showStars()}({product.rating.rate})
          </S.Review>
          <S.Price>US$ {product.price.toFixed(2)}</S.Price>
        </S.ReviewPriceContainer>

        <S.AddToCartButtonWrapper>
          {isProductOnCart ? (
            <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
              Remover do Carrinho <FiShoppingCart />
            </S.RemoveFromCartButton>
          ) : (
            <S.AddToCartButton onClick={handleAddProductToCart}>
              Adicionar ao Carrinho <FiShoppingCart />
            </S.AddToCartButton>
          )}
        </S.AddToCartButtonWrapper>
      </S.Card>
    </>
  )
}
