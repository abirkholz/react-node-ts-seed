import * as React from 'react';
import * as CSSTransitionGroup from 'react-addons-css-transition-group';
import App from '../../app';
import Home from '../';

class HomePage extends React.Component<any, any> {
 
  public constructor(props: any, context: any) {
    super(props, context);
  };

  public render() {  

    const transitionProps = App.Constants.Transitions.DEFAULT;
    
    return (  
      <div className="Home">
        <CSSTransitionGroup 
          transitionName="slideLeft" 
          {...transitionProps} 
        >
        <div className="home-head"> Home Page Container</div>
        <div className="home-body">
          <Home.Components.Table />
        </div>
        </CSSTransitionGroup>
      </div>
    );
  };
};

export default HomePage;
