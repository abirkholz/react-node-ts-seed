import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../';
import Home from '../../home';

const browserHistory = createBrowserHistory();

class AppContainer extends React.Component<any, any> { 

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      location: location
    };
  }   

  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <App.Components.Navbar />
          <Route exact={true} path="/" component={Home.Containers.HomePage} />
        </div>
      </Router>
    );
  }
}

export default AppContainer;
