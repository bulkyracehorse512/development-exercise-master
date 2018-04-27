import './style/title.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import pencil from '../../assets/pencil.svg'
import { UPDATE_EDIT_STATE } from '../../constants/actionTypes'

class ViewMode extends Component {
  switchViewMode() {
    this.props.dispatch({type: UPDATE_EDIT_STATE})
  }

  render () {
    return (
      <div>
        <div className="editWrapper">
          <div onClick={() => {this.switchViewMode()}} className="edit">
            <img className="icon-button" src={pencil} />
          </div>
        </div>
        <div className="titleWrapper">
          <h1 className="title">{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.header.title,
  }
}

export default connect(mapStateToProps)(ViewMode)
