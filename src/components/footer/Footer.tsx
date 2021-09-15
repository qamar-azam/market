import { StyledAppFooter, StyledAppFooterText } from "./footer.styled"

export default function Footer() {
  const date = new Date()

  return (
    <StyledAppFooter>
      <StyledAppFooterText>
        ©{date.getFullYear()} Market . Privacy Policy
      </StyledAppFooterText>
    </StyledAppFooter>
  )
}
