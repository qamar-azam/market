import {
  variant as styledVariant,
  color,
  ColorProps,
  variant,
} from "styled-system"
import styled from "styled-components"

export type TextVariants = "large" | "medium" | "small"

export type WeightVariant = "bold" | "regular" | "light"

export interface TextProps {
  children: string
  variant: TextVariants
  weight?: WeightVariant
  color?: string
}

const weightVariant = variant({
  prop: "weight",
  variants: {
    bold: {
      fontWeight: "bold",
    },
    regular: {
      fontWeight: "regular",
    },
    light: {
      fontWeight: "light",
    },
  },
})
const styleVariant = styledVariant({
  variants: {
    large: {
      fontFamily: "body",
      fontSize: "16",
    },
    medium: {
      fontFamily: "body",
      fontSize: "14",
    },
    small: {
      fontFamily: "body",
      fontSize: "12",
    },
  },
})

const StyledText = styled.span<TextProps & ColorProps>(
  color,
  weightVariant,
  styleVariant
)

export default StyledText
