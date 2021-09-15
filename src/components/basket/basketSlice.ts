import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface Product {
  tags: string[]
  price: number
  name: string
  description: string
  slug: string
  added: number
  manufacturer: string
  itemType: string
  quantity?: number | undefined
}

export interface BasketState {
  products: Product[]
  total: number
}

const initialState: BasketState = {
  products: [],
  total: 0,
}

const calculateTotal = (products: Product[]) => {
  return products.reduce(
    (result, item) => Number(item.quantity) * item.price + result,
    0
  )
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      let product = state.products.find(
        (product) => product.name === action.payload
      )

      if (product) {
        product.quantity = Number(product.quantity) + 1
      }
      state.total = calculateTotal(state.products)
    },
    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      let product = state.products.find(
        (product) => product.name === action.payload
      )

      if (product) {
        /**
         * remove the product if quantity is 1, otherwise reduce quantity
         *  */
        if (product.quantity === 1) {
          let products = state.products.filter(
            (product) => product.name !== action.payload
          )

          state.products = products
        } else {
          product.quantity = Number(product.quantity) - 1
        }

        state.total = calculateTotal(state.products)
      }
    },
    addProductInBasket: (state, action: PayloadAction<Product>) => {
      let product = state.products.find(
        (product) => product.name === action.payload.name
      )

      if (product) {
        product.quantity = Number(product.quantity) + 1
      } else {
        let newProduct = { ...action.payload, quantity: 1 }
        state.products = [...state.products, newProduct]
      }

      state.total = calculateTotal(state.products)
    },
  },
})

export const {
  increaseProductQuantity,
  decreaseProductQuantity,
  addProductInBasket,
} = basketSlice.actions

export const selectBasket = (state: RootState) => state.basket
export const selectBasketTotal = (state: RootState) => state.basket.total

export default basketSlice.reducer
