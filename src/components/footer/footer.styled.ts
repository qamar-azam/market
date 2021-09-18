import styled from "styled-components"

export const StyledAppFooter = styled.footer`
  padding: 15px;
`

export const StyledAppFooterText = styled.div`
  color: ${({ theme }) => theme.footer.txtColor};
  font-size: 13px;
  text-align: center;
`
