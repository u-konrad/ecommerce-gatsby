import { createSlice, configureStore } from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
}

const initialCartState = { items: {}, totalItems: 0 }

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const { item } = action.payload
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
      if (!state.items[id]) return
      state.items[id].quantity++
      state.totalItems++
    },
    decrementItem(state, action) {
      const { id } = action.payload
      if (!state.items[id]) return
      state.totalItems--
      if (state.items[id].quantity === 1) {
        delete state.items[id]
      } else {
        state.items[id].quantity--
      }
    },
    removeItem(state, action) {
      const { id } = action.payload
      if (!state.items[id]) return
      state.totalItems -= state.items[id].quantity
      delete state.items[id]
    },
    clearCart(state, action) {
      state.items = {}
      state.totalItems = 0
    },
  },
})

const initialUserState = { user: null }

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    clearUser(state, action) {
      state.user = null
    },
  },
})

const initialAlertState = { text: "", type: "", show: false }

const alertSlice = createSlice({
  name: "alert",
  initialState: initialAlertState,
  reducers: {
    setAlert(state, action) {
      state.text = action.payload.text
      state.type = action.payload.type
      state.show = true
    },
    clearAlert(state, action) {
      state.text = ""
      state.show = false
    },
  },
})

export const createStore = () =>
  configureStore({
    reducer: {
      cart: persistReducer(persistConfig, cartSlice.reducer),
      user: userSlice.reducer,
      alert: alertSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export const alertActions = alertSlice.actions
export const cartActions = cartSlice.actions
export const userActions = userSlice.actions
