import rootSettings from './siteSetting/slice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

const combinedReducers = combineReducers({
  siteSettings: rootSettings
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['siteSettings']
}

const persistedReducers = persistReducer(persistConfig, combinedReducers)
export default persistedReducers
