import * as React from 'react';
import Home from '../';

class HomePage extends React.Component<any, any> {
 
  public constructor(props: any, context: any) {
    super(props, context);
  }

  public render() {  

    return (  
      <div className="Home">
        <div className="home-head"> Home Page Container</div>
        <div className="home-body">
          <Home.Components.Table />
        </div>
      </div>
    );
  }
}

export default HomePage;
