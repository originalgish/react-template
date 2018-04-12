import React, { Component } from 'react'

import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'

import '../style/style.scss';
class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;