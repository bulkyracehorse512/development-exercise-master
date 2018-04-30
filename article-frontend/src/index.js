import './style.css'

import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory'

import registerServiceWorker from './registerServiceWorker'

import rootReducer from './reducers/index'
import rootSaga from './sagas/index'
import routes from './routes'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  persistedReducer,
  applyMiddleware(middleware, sagaMiddleware),
)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()


