import { createStore, applyMiddleware } from "redux"
import { createReducer } from "./createReducer.js"
import thunkMiddleware from "redux-thunk"

const initializeStore = () => {
  const store = createStore(createReducer(), applyMiddleware(thunkMiddleware))

  store.asyncReducers = {}
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(createReducer(store.asyncReducers))
    return store
  }

  return store
}

export default initializeStore
