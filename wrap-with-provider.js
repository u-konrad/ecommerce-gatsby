import React from "react"
import { Provider } from "react-redux"
import { createStore } from "./src/store/store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import FirebaseProvider from "./src/firebase/FirebaseProvider"

// eslint-disable-next-line react/display-name,react/prop-types
 const wrap =({ element }) => {
  const store = createStore()
  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FirebaseProvider>
          {element}
          </FirebaseProvider>
      </PersistGate>
    </Provider>
  )
}

export default wrap;
