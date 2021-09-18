import styled from "styled-components"

export const StyledAppHeader = styled.header`
  background-color: ${({ theme }) => theme.header.bgColor};
  margin-bottom: 40px;
  min-height: 80px;
`

export const StyledAppLogo = styled.div`
  display: inline-block;
  margin: 18px auto 0;
`

export const StyledHeaderBasket = styled.div`
  background-color: #147594;
  color: #fff;
  font-size: 14px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 25px 24px 25px;

  img {
    margin-right: 9px;
  }

  span {
    vertical-align: super;
  }
`
