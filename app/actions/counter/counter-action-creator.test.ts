import { CounterActions, CounterActionTypes } from "../../actions"

describe('CounterActions', () => {
  it('creates an action to increment the value', () => {
    const expectedAction = {
      type: CounterActionTypes.INCREMENT_COUNTER,
      value: 1
    }

    expect(CounterActions.incrementCounter(1)).toEqual(expectedAction)
  })

  it('creates an action to decrement a value', () => {
    const expectedAction = {
      type: CounterActionTypes.DECREMENT_COUNTER,
      value: 1
    }

    expect(CounterActions.decrementCounter(1)).toEqual(expectedAction)
  })
})
