import {
  variant as styledVariant,
  color,
  ColorProps,
  variant,
} from "styled-system"
import styled from "styled-components"

export type WeightVariant = "bold" | "light" | "regular" | "semi" | "inherit"

export type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5"
export interface HeadingProps {
  children: string
  variant: HeadingVariants
  color?: string
  weight?: WeightVariant
}
const weightVariant = variant({
  prop: "weight",
  variants: {
    bold: {
      fontWeight: "700",
    },
    regular: {
      fontWeight: "400",
    },
    semi: {
      fontWeight: "600",
    },
    light: {
      fontWeight: "300",
    },
    inherit: {
      fontWeight: "inherit",
    },
  },
})
const styleVariant = styledVariant({
  variants: {
    h1: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "20px",
    },
    h2: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "18px",
    },
    h3: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "16px",
    },
    h4: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "14px",
    },
    h5: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "13px",
      marginBottom: "12px",
    },
  },
})
const StyledHeading = styled.div<HeadingProps & ColorProps>(
  color,
  weightVariant,
  styleVariant
)

export default StyledHeading
