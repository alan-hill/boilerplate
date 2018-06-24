import { CounterActionTypes } from '../actions'
​
export interface CounterState {
  value: number
}

export const initialCounterState: CounterState = {
  value: 0
}
​
export default function counterApp(state = initialCounterState, action) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_COUNTER:
      return { ...state, value: action.value + 1 }
    case CounterActionTypes.DECREMENT_COUNTER:
      return { ...state, value: action.value - 1 }
    default:
      return state
  }
}
