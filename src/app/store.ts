import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import productReducer from "../components/product/productSlice"
import basketReducer from "../components/basket/basketSlice"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
