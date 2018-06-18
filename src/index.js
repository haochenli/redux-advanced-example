import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'

const middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware.push(thunkMiddleware)
  // middleware.push(createLogger())
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
