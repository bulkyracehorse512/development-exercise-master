import './style/content.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

const location = "New York, NY"

class Content extends Component {
  render () {
    return (
      <div className="contentWrapper">
        <h3 className="location">{location.toUpperCase()}</h3>
        <p className="content">{this.props.content}</p>
        <h2 className="feature">{this.props.feature}</h2>
        <p className="content">{this.props.content}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.article.content,
    feature: state.article.feature,
  }
}


export default connect(mapStateToProps)(Content)
