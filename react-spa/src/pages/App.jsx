import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';

import './style/app.scss';
import logo from '../assets/imgs/logo.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img src={logo} className="logo" />
        <ul className="nav">
          <li>
            <NavLink strict exact to="/" replace>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink strict to="/about" replace>
              About
            </NavLink>
          </li>
        </ul>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}
