import React, { Component } from 'react';

import '../styling/styling.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
            <a className="nav_header">CabCharge Test</a>
        </div>
      </nav>
    )
  }
}

export default Header;