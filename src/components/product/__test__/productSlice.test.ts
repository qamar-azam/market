import productReducer, {
  ProductState,
  sortProducts,
  filterByBrands,
  filterByTags,
  pagination,
} from "../productSlice"

describe("counter reducer", () => {
  const initialState: ProductState = {
    products: [],
    page: 1,
    limit: 16,
    sort: null,
    order: null,
    filter: { brand: null, tags: null },
    status: "idle",
  }
  it("should handle initial state", () => {
    expect(productReducer(undefined, { type: "unknown" })).toEqual({
      products: [],
      page: 1,
      limit: 16,
      sort: null,
      order: null,
      filter: { brand: null, tags: null },
      status: "idle",
    })
  })

  it("should handle pagination", () => {
    const actual = productReducer(initialState, pagination(2))
    expect(actual.page).toEqual(2)
  })

  it("should handle sortProduct", () => {
    const actual = productReducer(
      initialState,
      sortProducts("price low to high")
    )
    expect(actual.sort).toEqual("price low to high")
  })

  it("should handle filterByBrands", () => {
    const actual = productReducer(initialState, filterByBrands("Beach"))
    expect(actual.filter).toEqual({ brand: "Beach", tags: null })
  })

  it("should handle incrementByAmount", () => {
    const actual = productReducer(initialState, filterByTags("Beach"))
    expect(actual.filter).toEqual({ brand: null, tags: "Beach" })
  })
})
