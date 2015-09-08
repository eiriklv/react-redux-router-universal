import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/inbox`}>Inbox</Link></li>
        </ul>
      </nav>
    );
  }
}
