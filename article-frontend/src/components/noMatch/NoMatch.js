import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoMatch extends Component {
  render() {
    return(
      <div>NOMATCH</div>
    )
  }
}

export default connect()(NoMatch)
