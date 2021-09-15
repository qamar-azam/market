import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { apiFetchProducts } from "./productAPI"

export interface Product {
  tags: string[]
  price: number
  name: string
  description: string
  slug: string
  added: number
  manufacturer: string
  itemType: string
}

export interface ProductState {
  products: Product[]
  page: number
  limit: number
  sort: string | null
  order: string | null
  filter: {
    brand: null | string
    tags: null | string
  }
  status: "idle" | "loading" | "failed" | "finished"
}

const initialState: ProductState = {
  products: [],
  page: 1,
  limit: 16,
  sort: null,
  order: null,
  filter: { brand: null, tags: null },
  status: "idle",
}

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (page: number, { getState }) => {
    try {
      const { product } = getState() as { product: ProductState }
      let query: any = {
        _page: page,
        _limit: product.limit,
      }

      if (product.sort) {
        let sortValues = product.sort.split(",")
        query["_sort"] = sortValues[0]
        query["_order"] = sortValues[1]
      }

      if (product.filter.brand) {
        query["manufacturer"] = product.filter.brand
      }
      if (product.filter.tags) {
        query["q"] = product.filter.tags
      }

      const response = await apiFetchProducts(query)
      return response.data
    } catch (err) {
      console.error("API failed", err)
    }
  }
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    pagination: (state, action) => {
      state.page = action.payload
    },
    sortProducts: (state, action) => {
      state.sort = action.payload
    },
    filterByBrands: (state, action) => {
      state.filter.brand = action.payload
    },
    filterByTags: (state, action) => {
      state.filter.tags = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "finished"
        if (action.payload) {
          state.products = action.payload
        }
      })
  },
})

export const { pagination, sortProducts, filterByBrands, filterByTags } =
  productSlice.actions

export const selectAllProducts = (state: RootState) => state.product.products

export default productSlice.reducer
