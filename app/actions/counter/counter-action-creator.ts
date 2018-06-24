import {CounterActionTypes} from "../index"

function incrementCounter(value) {
  return {
    type: CounterActionTypes.INCREMENT_COUNTER,
    value
  }
}

function decrementCounter(value) {
  return {
    type: CounterActionTypes.DECREMENT_COUNTER,
    value
  }
}

export {
  incrementCounter,
  decrementCounter
}
