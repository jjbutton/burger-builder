import React, { Component } from 'react';
import BurgerBuilder from './containers/burger-builder/burger-builder';
import Layout from './components/layout/layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
