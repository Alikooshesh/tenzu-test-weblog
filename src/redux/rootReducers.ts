import rootSettings from './siteSetting/slice'
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
    siteSettings : rootSettings
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['siteSettings']},combinedReducers)
export default persistedReducers