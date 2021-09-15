import { useDispatch, useSelector } from "react-redux"
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  selectBasket,
} from "./basketSlice"

import {
  StyledBasket,
  StyledBasketItem,
  StyledBasketItemMeta,
  StyledHeading,
  StyledText,
  StyledBasketItemQuantity,
  StyledQuantityButton,
  StyledQuantityValue,
  StyledBasketTotal,
} from "./basket.styled"

export default function Basket() {
  const { products, total } = useSelector(selectBasket)
  const dispatch = useDispatch()
  return (
    <StyledBasket>
      {products.map((product, index) => {
        return (
          <StyledBasketItem key={index}>
            <StyledBasketItemMeta>
              <StyledHeading>{product.name}</StyledHeading>
              <StyledText>₺{product.price}</StyledText>
            </StyledBasketItemMeta>

            <StyledBasketItemQuantity>
              <StyledQuantityButton
                onClick={() => dispatch(decreaseProductQuantity(product.name))}
              >
                -
              </StyledQuantityButton>
              <StyledQuantityValue>{product.quantity}</StyledQuantityValue>
              <StyledQuantityButton
                onClick={() => dispatch(increaseProductQuantity(product.name))}
              >
                +
              </StyledQuantityButton>
            </StyledBasketItemQuantity>
          </StyledBasketItem>
        )
      })}
      {products.length ? (
        <StyledBasketTotal>₺{total.toFixed(2)}</StyledBasketTotal>
      ) : null}
      {!products.length && <StyledText>No products in basket</StyledText>}
    </StyledBasket>
  )
}
