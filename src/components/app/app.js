// React modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routes from '../../routes';
import { HEADER_NAV } from '../../constants';

import './app-style.scss';

class App extends Component {
  renderNav = (headerNav) => {
    return headerNav.map(navOption => {
      return (
        <li key={navOption.id}>
          <Link to={navOption.path}>{navOption.name}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <ul className="wrapper">
            {this.renderNav(HEADER_NAV)}
          </ul>
        </header>
        <main className="wrapper">
          <Routes />
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;