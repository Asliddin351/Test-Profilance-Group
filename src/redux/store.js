import {combineReducers, createStore } from "redux";
import { newsReducer } from "./reducers/newsReducer";
import { usersReducer } from "./reducers/usersReducer";
import { activeUserReducer } from "./reducers/activeUserReducer";

export const store = createStore(combineReducers({newsReducer, usersReducer, activeUserReducer}));