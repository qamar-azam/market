import logo from "./logo.svg"
import basket from "./basket.svg"
import {
  StyledAppHeader,
  StyledAppLogo,
  StyledHeaderBasket,
} from "./header.styled"
import { useSelector } from "react-redux"
import { selectBasketTotal } from "../basket/basketSlice"
import { StyledContainer } from "../../theme/StyledContainer"

export default function Header() {
  const total = useSelector(selectBasketTotal)
  return (
    <StyledAppHeader>
      <StyledContainer>
        <StyledAppLogo>
          <img src={logo} alt='market' />
        </StyledAppLogo>

        {total !== 0 && (
          <StyledHeaderBasket>
            <img src={basket} alt='bag' />
            <span>₺ {total.toFixed(2)}</span>
          </StyledHeaderBasket>
        )}
      </StyledContainer>
    </StyledAppHeader>
  )
}
