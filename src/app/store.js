import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../features/token/tokenSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default storage

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, tokenReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // यहाँ serializableCheck को disable किया
    })
})

export const persistor = persistStore(store) // Persistor export karna