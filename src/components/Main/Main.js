import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { setYear } from '../../actions/index'

import './main.scss';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='main'>
         <div className='target'>1234</div>
      </div>
  )}
}

// function mapStateToProps(state) {
//   return {
//     reducerMain: state.reducerMain
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setYear: bindActionCreators(setYear, dispatch)
//   }
// }

export default /*connect(mapStateToProps, mapDispatchToProps)*/(Main)