import styled from 'styled-components'

export const Card = styled.article`
  background-color: white;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  gap: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 2px 0 #888;
`

export const ProductImage = styled.img`
  width: 250px;
  height: 350px;

  object-fit: contain;
`

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Review = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  & > svg {
    font-size: 1.1rem;
  }

  & > svg:nth-child(5){
    margin-right: 0.5rem;
  }
`

export const Price = styled.strong``

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: 5px;
  height: 35px;
  width: 100%;
  background-color: blue;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border: 1px solid blue;

  &:hover {
    background-color: white;
    color: blue;
  }
`

export const RemoveFromCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: 5px;
  height: 35px;
  width: 100%;
  background-color: violet;
  color: black;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border: 1px solid violet;

  &:hover {
    background-color: white;
    color: violet;
  }
`
