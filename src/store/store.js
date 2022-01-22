import { createSlice, configureStore } from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'cart',
  version: 1,
  storage,

}

const initialCartState = { items: {}, totalItems: 0 }

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const {item} = action.payload
      state.totalItems++
      if (!state.items[item.id]) {
        state.items[item.id] = {
          ...item,
          quantity: 1,
        }
      } else {
        state.items[item.id].quantity++
      }
    },
    incrementItem(state, action) {
      const { id } = action.payload
      if (!state.items[id]) return;
      state.items[id].quantity++
      state.totalItems++
    },
    decrementItem(state, action) {
      const { id } = action.payload
      if (!state.items[id]) return;
      state.totalItems--
      if (state.items[id].quantity === 1) {
        delete state.items[id]
      } else {
        state.items[id].quantity--
      }
    },
    removeItem(state, action) {
      const { id } = action.payload
      if (!state.items[id]) return;
      state.totalItems -=  state.items[id].quantity
      delete state.items[id]
    },
    clearCart(state, action) {
      state.items = {}
      state.totalItems = 0
    },
  },
})

export const createStore = () =>
  configureStore({
    reducer: {
      cart: persistReducer(persistConfig,cartSlice.reducer),
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

export const cartActions = cartSlice.actions
