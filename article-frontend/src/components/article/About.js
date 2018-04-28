import './style/about.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatDate } from '../../utils/dateFormat'

class About extends Component {
  render() {
    return(
      <div className="aboutWrapper">
        <div className="sectionWrapper">
          <h3 className="description">BY</h3><h2 className="author">{this.props.author}</h2>
        </div>
        <div className="sectionWrapper">
          <h3 className="description">{this.props.date}</h3>
        </div>
        <div className="sectionWrapper">
          {this.props.tags.map(i => {
            return <h3 className="tag">{i.toUpperCase()}</h3>;
        })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.article.tags,
    author: state.article.author,
    date: formatDate(state.article.dateModified),
  }
}

export default connect(mapStateToProps)(About)

