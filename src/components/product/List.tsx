import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import placeholderImage from "./placeholder.png"

import { selectAllProducts, fetchProducts } from "./productSlice"
import { addProductInBasket } from "../basket/basketSlice"
import Pagination from "./Pagination"

import {
  StyledProductContainer,
  StyledProductItems,
  StyledProductItem,
  StyledProductItemImage,
  StyledProductItemPrice,
  StyledProductItemTitle,
  StyledProductItemButton,
} from "./list.styled"
import StyledHeading from "../../theme/StyledHeading"
import { StyledText } from "../basket/basket.styled"

export default function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const productStatus = useSelector((state: RootState) => state.product.status)

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts(1))
    }
  }, [dispatch, productStatus])

  return (
    <StyledProductContainer>
      <StyledHeading
        variant='h1'
        color='#6f6f6f'
        style={{ width: "100%", marginBottom: "30px" }}
      >
        Products
      </StyledHeading>

      <StyledProductItems>
        {productStatus === "loading" && <StyledText>Loading...</StyledText>}
        {productStatus === "finished" && products.length === 0 ? (
          <StyledText>No Product found.</StyledText>
        ) : null}

        {products.map((product, index) => {
          return (
            <StyledProductItem key={index + "_" + product.name}>
              <StyledProductItemImage>
                <img src={placeholderImage} alt={product.name} />
              </StyledProductItemImage>

              <StyledProductItemPrice>₺ {product.price}</StyledProductItemPrice>
              <StyledProductItemTitle>{product.name}</StyledProductItemTitle>
              <StyledProductItemButton
                onClick={() => dispatch(addProductInBasket(product))}
              >
                Add
              </StyledProductItemButton>
            </StyledProductItem>
          )
        })}
      </StyledProductItems>

      {products.length !== 0 && <Pagination />}
    </StyledProductContainer>
  )
}
