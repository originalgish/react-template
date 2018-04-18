import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import App from './containers/App';

const makeRoutes = () => {
  return (
    <div>
      <Route exact path='/' component={App} />
    </div>
  );
};

export default withRouter(makeRoutes);
