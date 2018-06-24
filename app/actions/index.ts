import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./counter/counter-types"
import { incrementCounter, decrementCounter } from "./counter/counter-action-creator"

const CounterActionTypes = {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
}

const CounterActions = {
  incrementCounter,
  decrementCounter
}

export {
  CounterActionTypes,
  CounterActions
}
