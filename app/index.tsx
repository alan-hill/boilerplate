import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import appReducer from "./reducers";
import thunkMiddleware from 'redux-thunk'
import routes from "./routes"

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = compose(
  composeEnhancer(
    applyMiddleware(
      logger,
      thunkMiddleware
    )
  )
)(createStore)(appReducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
    document.getElementById('app')
  )
}

render()

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })

  module.hot.accept('./reducers', () => {
    store.replaceReducer(appReducer)
  })
}
