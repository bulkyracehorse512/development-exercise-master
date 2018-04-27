import './style/content.css'

import React, { Component } from 'react'

const content = "Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere."
const location = "New York, NY"
const feature= "Looking at it now, last December. We were built to fall apart. Then fall back together."

export default class Content extends Component {
  render () {
    return (
      <div className="contentWrapper">
        <h3 className="location">{location.toUpperCase()}</h3>
        <p className="content">{content}</p>
        <h2 className="feature">{feature}</h2>
        <p className="content">{content}</p>
      </div>
    )
  }
}
