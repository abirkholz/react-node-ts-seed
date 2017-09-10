import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../';
import Home from '../../home';

class AppContainer extends React.Component<any, any> { 

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      location: location
    };
  }   

  render() {
    return (
        <div className="App">
          <App.Components.Navbar />
          <Switch>
            <Route exact={true} path="/" component={Home.Containers.HomePage}/>
          </Switch>
        </div>
    );
  }
}

export default AppContainer;
