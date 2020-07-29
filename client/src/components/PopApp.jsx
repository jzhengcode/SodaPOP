import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserPage from './UserPage';
import LoginPage from './LoginPage';

class PopApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/dashboard' component={UserPage} />
      </Switch>
    )
  }
}

export default PopApp;
