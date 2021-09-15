import { screen } from "@testing-library/react"
import { render } from "../../../utils/test-utils"
import Filter from "../Filter"

test("render Filter ", () => {
  render(<Filter />)

  expect(screen.getByText("Sorting")).toBeInTheDocument()
  expect(screen.getByText("Brands")).toBeInTheDocument()
  expect(screen.getByText("Tag")).toBeInTheDocument()
})
