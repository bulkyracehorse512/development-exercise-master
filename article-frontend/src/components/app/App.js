import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../header/Header'
import Article from '../article/Article'
import { FETCH_CONTENT_REQUEST } from '../../constants/actionTypes'

class App extends Component {
  componentWillMount() {
    this.props.dispatch({ type: FETCH_CONTENT_REQUEST})
  }

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
