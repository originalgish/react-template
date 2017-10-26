import React, { Component } from 'react'
//import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

import './app.scss';
import '../styles/normalize.scss';

class App extends Component {
  render() {
    const { page } = this.props
    const { setYear } = this.props.pageActions
    console.log(this.props);
    
    return (
      <div className='row'>
        <Page photos={page.photos} year={page.year} setYear={setYear} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
