import * as React from "react"
import { Provider } from "react-redux"
import thunkMiddleware from 'redux-thunk'
import { shallow, mount } from "enzyme"
import configureStore from 'redux-mock-store'

import { Counter } from "./Counter"

describe('Counter', () => {
  const initialState = {
    app: {
      value: 0
    }
  }

  const mockStore = configureStore([thunkMiddleware])

  let store;
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      handleIncrement: (value: number) => jest.fn(),
      handleDecrement: (value: number) => jest.fn(),
      value: 0
    }
  
    store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <Counter {...props} />
      </Provider>
    )
  });

  it('it calls handleIncrement when the respective button is clicked', () => {
    wrapper.find('button').first().simulate('click')
    expect(props.handleIncrement).toHaveBeenCalled
  })

  it('it calls handleDecrement when the respective button is clicked', () => {
    wrapper.find('button').last().simulate('click')
    expect(props.handleDecrement).toHaveBeenCalled
  })

  it('shows the value of the counter', () => {
    expect(wrapper.find('span.Counter-Value').text()).toEqual("0")
  })
})
