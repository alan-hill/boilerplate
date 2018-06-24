import * as React from "react"
import { Provider } from "react-redux"
import {mount} from "enzyme"
import configureStore from 'redux-mock-store'

import App from "./App"
import Counter from "./components/Counter"

describe('App', () => {
  const initialState = {
    app: {
      value: 0
    }
  }
  
  const mockStore = configureStore()

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper =  mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });

  it('contains the Counter component', () => {
    expect(wrapper.find(Counter)).toHaveLength(1)
  })
})
