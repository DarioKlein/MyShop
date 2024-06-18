import { useEffect, useState } from 'react'
import * as S from './styles'
import { ProductCard } from '../card/ProductCard'
import { TailSpin } from 'react-loader-spinner'


export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

export function ProductsList() {
  const [dataProducts, setDataProducts] = useState([] as Product[])

  useEffect(() => {
    async function getDataProducts() {
      const data = await fetch('https://fakestoreapi.com/products')
      const arrDataProducts = await data.json()
      setDataProducts(arrDataProducts)
    }
    getDataProducts()
  }, [])

  return (
    <S.Container>
      {dataProducts.length > 0 ? (
        dataProducts.map(product => <ProductCard key={product.id} product={product} />)
      ) : (
        <S.Loader>
          <TailSpin color='blue' height={200} width={200} />
        </S.Loader>
      )}
    </S.Container>
  )
}
