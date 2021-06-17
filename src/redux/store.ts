import {combineReducers, createStore} from "redux";
import counterReducer from "./reducers/counter-reducer";

let reducers = combineReducers({
  counter: counterReducer
})

export type StateType = ReturnType<typeof reducers>

export let store = createStore(reducers)