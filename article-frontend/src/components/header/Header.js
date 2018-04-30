import './style/header.css'

import React, { Component } from 'react'
import {Grid, Row, Column} from 'react-cellblock'
import { connect } from 'react-redux'

import logo from '../../assets/logo_and_hamburger.svg'
import EditMode from './EditMode'
import ViewMode from './ViewMode'


class Header extends Component {

  isEditMode() {
    if (this.props.edit) {
      return <EditMode />
    }
    return <ViewMode />
  }


  render() {
    return (
      <div id="container" className="background">
        <Grid gutterWidth={70}>
          <Row>
            <Column width="1/8">
            </Column>
            <Column width="1/8">
            </Column>
            <Column width="1/8">
            </Column>
            <Column width="1/8">
            </Column>
            <Column width="1/8">
            </Column>
            <Column width="1/8">
            </Column>
            <Column width="1/4">
              <img className="logo" src={logo} />
            </Column>
          </Row>
          <Row className="titleRow">
            <Column width="1/8>">
            </Column>
            <Column width="6/8">
              {this.isEditMode()}
            </Column>
            <Column width="1/8>">
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    edit: state.header.edit,
  };
}

export default connect(mapStateToProps)(Header)
