import {createStore} from "@reduxjs/toolkit";
import persistedReducers from "./rootReducers";
import {persistStore} from "redux-persist";

export const store = createStore(persistedReducers)
export const persistore = persistStore(store)

export type IRootState = ReturnType<typeof store.getState>