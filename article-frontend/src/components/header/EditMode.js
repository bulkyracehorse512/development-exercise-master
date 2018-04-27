import './style/title.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import checkmark from '../../assets/checkmark.svg'
import x from '../../assets/x.svg'
import {
  UPDATE_EDIT_STATE,
  CHANGE_TITLE_REQUEST,
  CANCEL_TITLE_CHANGE,
} from '../../constants/actionTypes'

let title;

class EditMode extends Component {

  cancelChange() {
    this.props.dispatch({ type: CANCEL_TITLE_CHANGE })
  }

  updateTitle() {
    this.props.dispatch({ type: UPDATE_EDIT_STATE, title })
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.updateTitle()
    }
  }

  render() {
    return (
      <div className="editRow">
        <div className="editWrapper">
          <div onClick={() => {this.cancelChange()}} className="x">
            <img className="icon-button" src={x} />
          </div>
          <div className="checkmark">
            <img className="icon-button" src={checkmark} />
          </div>
        </div>
        <div className="editableWrapper">
          <div className="innerEditable">
            <div className="titleBox">
              <input value={this.props.title} className="editableTitle" />
            </div>
            <div className="slugWrapper">
              <p className="slug">slug:</p><p className="slugText">{this.props.slug}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.header.title,
    slug: state.header.slug,
  }
}

export default connect(mapStateToProps)(EditMode)
