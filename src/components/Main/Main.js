import React from 'react'
import { connect } from 'react-redux'
import { showModal } from '../../actions/index'

import './main.scss';

class Main extends React.Component {
  constructor() {
    super();
  }

  showModal = (e) => {
    const value = +e.target.innerText;
    this.props.showModal(value)
  }

  render() {
    const { modalName } = this.props.state.reducerMain;
    return (
      <div className='main'>
        <h1>{modalName}</h1>
        <button onClick={this.showModal}>1</button>
        <button onClick={this.showModal}>2</button>
        <button onClick={this.showModal}>3</button>
        <button onClick={this.showModal}>4</button>
        <button onClick={this.showModal}>5</button>
      </div>
  )}
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return ({
    showModal: (value) => dispatch(showModal(value))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)