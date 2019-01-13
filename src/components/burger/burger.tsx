import React, { useState } from 'react';
import styled from 'styled-components';
import { BurgerIngredient } from './burger-ingredient/burger-ingredient';

// export default class Burger extends Component {
//   render() {
//     return <BurgerIngredient type="Cheese" />;
//   }
// }
const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

interface BurgerProps {}

const burger = (props: BurgerProps) => {
  return (
    <Burger>
      <BurgerIngredient type="BreadTop" />
      <BurgerIngredient type="Meat" />
      <BurgerIngredient type="Cheese" />
      <BurgerIngredient type="BreadBottom" />
    </Burger>
  );
};

export default burger;
