import React, { Component } from 'react';
import styled from 'styled-components';
import Burger from '../../components/burger/burger';
const BuildControls = styled.div``;

class BurgerBuilder extends Component {
  render() {
    return (
      <>
        <Burger>Burger</Burger>
        <BuildControls>Build controls</BuildControls>
      </>
    );
  }
}

export default BurgerBuilder;
