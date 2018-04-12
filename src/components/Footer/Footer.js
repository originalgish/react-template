import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { setYear } from '../../actions/index'

import './footer.scss';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='footer'>
         
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

export default /*connect(mapStateToProps, mapDispatchToProps)*/(Footer)