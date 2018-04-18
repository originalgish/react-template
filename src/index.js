import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';

import MakeRoutes from './routes';

import initReactFastclick from 'react-fastclick';
initReactFastclick();

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
  );
};

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(MakeRoutes);
  });
}

render(MakeRoutes);
