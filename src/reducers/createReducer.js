// This file allows for asynchronous reducers (which is crucial for fast loading, because the
//		reducers can be large, but they usually depend on even larger imports)

// NOTE: asynch reducers must be added with `withReducer()` from lib/withReducer
import { combineReducers } from "redux"
// import { ignoreActions } from "redux-ignore"

// import login from "./login.js"

// createReducer is setting up the reducers to split between the initial load
//		and any async reducers.
// All initial reducers get called here!
export function createReducer(asyncReducers) {
  return combineReducers({
    // login: ignoreActions(login, ["updateCrosshairPositionY"]),
    ...asyncReducers,
  })
}

// injectAsyncReducer is how we add reducers asynchronously
export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
