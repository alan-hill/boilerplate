import {CounterActionTypes} from "../actions"
import counterApp from "../reducers/counter-reducer"

describe('CounterApp', () => {
  it('returns the intial state of the counterApp', () => {
    expect(counterApp(undefined, {})).toEqual({
      app: {
        value: 0
      }
    })
  })

  it('increments the value by 1 when INCREMENT_COUNTER action is called', () => {
    expect(
      counterApp({ value: 0 }, {
        type: CounterActionTypes.INCREMENT_COUNTER,
        value: 0
      })
    ).toEqual({ value: 1 })
  })

  it('decrements the value by 1 when DECREMENT_COUNTER action is called', () => {
    expect(
      counterApp({ value: 5 }, {
        type: CounterActionTypes.DECREMENT_COUNTER,
        value: 5
      })
    ).toEqual({ value: 4 })
  })
})
