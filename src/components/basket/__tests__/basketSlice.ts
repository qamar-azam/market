import counterReducer, {
  BasketState,
  increaseProductQuantity,
  decreaseProductQuantity,
  addProductInBasket,
} from "../basketSlice"

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

describe("basket reducer", () => {
  const initialState: BasketState = {
    products: [],
    total: 0,
  }

  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      products: [],
      total: 0,
    })
  })

  it("should add product in basket", () => {
    const actual = counterReducer(
      initialState,
      addProductInBasket(fakeProducts[0])
    )
    expect(actual.total).toEqual(10.99)
  })

  it("should increase qunatity on add product in basket", () => {
    const actual = counterReducer(
      { products: [{ ...fakeProducts[0], quantity: 1 }], total: 10.99 },
      addProductInBasket(fakeProducts[0])
    )
    expect(actual.total).toEqual(21.98)
  })

  it("should handle increment in quantity", () => {
    const actual = counterReducer(
      { products: [{ ...fakeProducts[0], quantity: 1 }], total: 10.99 },
      increaseProductQuantity("Handcrafted Trees Mug")
    )
    expect(actual.total).toEqual(21.98)
  })

  it("should handle decrement in quantity", () => {
    const actual = counterReducer(
      { products: [{ ...fakeProducts[0], quantity: 2 }], total: 10.99 },
      decreaseProductQuantity("Handcrafted Trees Mug")
    )
    expect(actual.total).toEqual(10.99)

    decreaseProductQuantity("Handcrafted Trees Mug")
  })

  it("should remove product if quantity 0", () => {
    const actual = counterReducer(
      { products: [{ ...fakeProducts[0], quantity: 1 }], total: 10.99 },
      decreaseProductQuantity("Handcrafted Trees Mug")
    )
    expect(actual.total).toEqual(0)
  })
})
