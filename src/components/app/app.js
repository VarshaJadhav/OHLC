// React modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routes from '../../routes';
import { HEADER_NAV } from '../../constants';

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
      <div>
        <header>
          <nav>
            <ul>
              {this.renderNav(HEADER_NAV)}
            </ul>
          </nav>
        </header>
        <main>
          <Routes />
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;