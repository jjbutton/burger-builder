import React from 'react';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/burger-builder/burger-builder';

export default () => {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
};
