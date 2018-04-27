import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, Row, Column} from 'react-cellblock'

import Header from '../header/Header'
import Article from '../article/Article'

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Article />
      </div>
    )
  }
}

export default connect()(App)
