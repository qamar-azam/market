import styled from "styled-components"
import { device } from "../../theme/mediaBreakpoints"

export const StyledProductContainer = styled.div`
  flex: 1 1 49%;
  margin-right: 2%;
`

export const StyledProductItems = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 32px;

  @media ${device.small} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`

export const StyledProductItem = styled.div`
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 30px;

  @media ${device.small} {
    flex: 0 0 22.5%;
    margin-right: 3%;
  }

  &:nth-child(4n) {
    margin-right: 0;
  }
`

export const StyledProductItemImage = styled.div`
  border: 2px solid #f3f0fe;
  border-radius: 12px;
  margin-bottom: 8px;
  padding: 16px;

  img {
    width: 100%;
  }
`

export const StyledProductItemPrice = styled.div`
  color: #1ea4ce;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`
export const StyledProductItemTitle = styled.div`
  color: #191919;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
`

export const StyledProductItemButton = styled.button`
  background-color: #1ea4ce;
  border-radius: 2px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 12px;
  text-align: center;
  padding: 4px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`
