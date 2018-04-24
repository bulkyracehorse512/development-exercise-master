import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory'

import registerServiceWorker from './registerServiceWorker'
import App from './components/app/App.js'
import Article from './components/article/Article.js'
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'


const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const middleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// persistStore(store)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Article} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route exact path="/article" />
//       </Switch>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )
// registerServiceWorker()
