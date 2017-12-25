import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { HashRouter } from 'react-router-dom';
import App from './containers/App';

// import Fastclick from 'fastclick';

// document.addEventListener('DOMContentLoaded', () => {
//   Fastclick.attach(document.body);
// });

import initReactFastclick from 'react-fastclick';
initReactFastclick();

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter>
          <Component />
        </HashRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default;
    render(App);
  });
}