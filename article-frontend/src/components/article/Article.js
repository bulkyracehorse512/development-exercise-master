import './style/article.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import {Grid, Row, Column} from 'react-cellblock'
import About from './About.js'
import Content from './Content.js'

class Article extends Component {
  render() {
    return(
      <Grid className="articleWrapper" gutterWidth={70}>
        <Row>
          <Column width="2/16">
          </Column>
          <Column width="4/16">
            <About />
          </Column>
          <Column width="10/16">
            <Content />
          </Column>
        </Row>
      </Grid>
    )
  }
}

export default connect()(Article)
