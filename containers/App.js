import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Home from '../components/Home';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation />
        {children || <Home />}
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  history: PropTypes.object.isRequired
};

export default App;
