import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <div>
        <Toolbar drawerToggleHandler={this.drawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.sideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
