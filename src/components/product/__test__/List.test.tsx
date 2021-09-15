import { screen } from "@testing-library/react"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { render } from "../../../utils/test-utils"
import { BASE_URL } from "../../../utils/config"
import ProductList from "../List"

const fakeProducts = [
  {
    tags: ["Trees"],
    price: 10.99,
    name: "Handcrafted Trees Mug",
    description:
      "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    slug: "Handcrafted-Trees-Mug",
    added: 1485723766805,
    manufacturer: "OHara-Group",
    itemType: "mug",
  },
]

export const handlers = [
  rest.get(BASE_URL + "/products", (req, res, ctx) => {
    return res(ctx.json(fakeProducts))
  }),
]
const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test("render list of products", async () => {
  render(<ProductList />)

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()

  fakeProducts.forEach(async (product) => {
    expect(await screen.findByText(product.name)).toBeInTheDocument()
    expect(await screen.findByText(product.description)).toBeInTheDocument()
    expect(await screen.findByText(product.slug)).toBeInTheDocument()
    expect(await screen.findByText(product.manufacturer)).toBeInTheDocument()
    expect(await screen.findByText("Add")).toBeInTheDocument()
  })
})
