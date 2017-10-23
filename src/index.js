import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component />
      </HashRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(App);
  });
}