import './style/title.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import checkmark from '../../assets/checkmark.svg'
import x from '../../assets/x.svg'
import {
  CHANGE_TITLE_REQUEST,
  CANCEL_TITLE_CHANGE,
} from '../../constants/actionTypes'


class EditMode extends Component {

  constructor(props) {
    super(props);
    this.state = {value: props.title};

    this.handleChange = this.handleChange.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.cancelChange = this.cancelChange.bind(this);
    this.returnSlug = this.returnSlug.bind(this);
  }

  cancelChange() {
    this.props.dispatch({ type: CANCEL_TITLE_CHANGE })
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.updateTitle()
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  updateTitle() {
    this.props.dispatch({
      type: CHANGE_TITLE_REQUEST,
      title: this.state.value,
      id: this.props.id,
    })
  }

  returnSlug() {
    if (!this.state.value.length) {
      return "please enter a post title"
    }
    else {
      return this.props.slug
    }
  }

  render() {
    return (
      <div className="editRow">
        <div className="editWrapper">
          <div onClick={() => {this.cancelChange()}} className="x">
            <img className="icon-button" src={x} />
          </div>
          <div
            onClick={() => {this.state.value.length ? this.updateTitle() : null}}
            className={this.state.value.length ? "checkmark" : "checkmark gray"}
          >
            <img className="icon-button" src={checkmark} />
          </div>
        </div>
        <div className="editableWrapper">
          <div className="innerEditable">
            <div className="titleBox">
             <input
              className="editableTitle"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            </div>
            <div className="slugWrapper">
              <p className="slug">slug:</p>
              <p className="slugText">{this.returnSlug()}</p>
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
    id: state.article.id,
  }
}

export default connect(mapStateToProps)(EditMode)
