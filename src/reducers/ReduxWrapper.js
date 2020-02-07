import React from "react"
import { Provider } from "react-redux"

import initializeStore from "./initializeStore.js"

const store = initializeStore()

const ReduxWrapper = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

export default ReduxWrapper
