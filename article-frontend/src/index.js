import './style.css'

import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory'

import registerServiceWorker from './registerServiceWorker'

import rootReducer from './reducers/index'
import rootSaga from './sagas/index'
import routes from './routes'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(middleware, sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()


