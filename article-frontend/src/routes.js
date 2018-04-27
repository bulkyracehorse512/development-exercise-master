
import React from 'react'
import { Route, Switch } from 'react-router'
import App from './components/app/App'
import Article from './components/article/Article'
import NoMatch from './components/noMatch/NoMatch'


export default (
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/article" component={Article} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)
