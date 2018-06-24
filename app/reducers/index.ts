import { combineReducers } from 'redux'
import counterApp, { initialCounterState } from "./counter-reducer"

const appReducer = combineReducers({
  app: counterApp
})

export interface AppState {
  app: {
    value: number
  }
}

export const InitialAppState = {
  app: {
    initialCounterState
  }
}

export default appReducer
