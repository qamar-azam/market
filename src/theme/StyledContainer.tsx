import styled from "styled-components"
import { device } from "./mediaBreakpoints"

export const StyledContainer = styled.div`
  max-width: 1232px;
  margin: auto;
  position: relative;
  padding: 0 15px;

  @media ${device.small} {
    align-items: start;
    display: flex;
    padding: 0;
  }
`
