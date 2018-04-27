import './style/about.css'

import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return(
      <div className="aboutWrapper">
        <div className="sectionWrapper">
          <h3 className="description">BY</h3><h2 className="author">Bob Loblaw</h2>
        </div>
        <div className="sectionWrapper">
          <h3 className="description">3/15/2016</h3>
        </div>
        <div className="sectionWrapper">
          {['#cool', '#nature', '#fungus'].map(i => {
            return <h3 className="tag">{i.toUpperCase()}</h3>;
        })}
        </div>
      </div>
    );
  }
}

