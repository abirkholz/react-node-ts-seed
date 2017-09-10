import * as React from 'react';

class Navbar extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="Navbar">
        <div className="navbar-title"> react-node-ts-seed </div>
      </div>
    );
  }
}

export default Navbar;