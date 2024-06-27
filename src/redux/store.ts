import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import persistedReducers from './rootReducers'

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export const persistore = persistStore(store)

export type IRootState = ReturnType<typeof store.getState>
