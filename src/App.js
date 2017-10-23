import React from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';

import './styles/normalize.scss';
import './app.scss';


export default class App extends React.Component {
  
  render() {
    return (
      <div className='app'>
        hey there
      </div>
    );
  }
}