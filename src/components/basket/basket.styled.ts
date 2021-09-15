import styled from "styled-components"

export const StyledBasket = styled.div`
  background-color: #fff;
  border: 8px solid #1ea4ce;
  border-radius: 2px;
  flex: 1 1 24%;
  padding: 27px 22px;
`

export const StyledBasketItem = styled.div`
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  margin-bottom: 18px;
  padding-bottom: 18px;
`

export const StyledHeading = styled.div`
  color: $text-color;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
`

export const StyledText = styled.div`
  color: #1ea4ce;
  font-size: 14px;
`

export const StyledBasketItemMeta = styled.div`
  flex: 1 1 60%;
`

export const StyledBasketItemQuantity = styled.div`
  flex: 1 1 40%;
  text-align: right;
  margin-top: 5px;
`

export const StyledQuantityButton = styled.div`
  color: #1ea4ce;
  display: inline-block;
  font-size: 26px;
`

export const StyledQuantityValue = styled.div`
  background-color: #1ea4ce;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  margin: 0 11px;
  padding-top: 6px;
  width: 32px;
  height: 32px;
  vertical-align: top;
`

export const StyledBasketTotal = styled.div`
  border: 2px solid #1ea4ce;
  border-radius: 2px;
  color: #1ea4ce;
  text-align: center;
  margin-left: auto;
  padding-top: 14px;
  width: 92px;
  height: 51px;
`
