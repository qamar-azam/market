import { screen } from "@testing-library/react"
import { render } from "../../../utils/test-utils"

import Basket from "../Basket"

test("render Basket with no product in basket message", () => {
  render(<Basket />)

  expect(screen.getByText(/No products in basket/i)).toBeInTheDocument()
})
