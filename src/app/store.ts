import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import productReducer from "../components/product/productSlice"
import basketReducer from "../components/basket/basketSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    basket: basketReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
