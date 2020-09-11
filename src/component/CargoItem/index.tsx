import React from 'react';

import { Container } from './styles';

import { OptionsIcon } from '../../styles/icons';

interface CargoItemProps {
  color: string;
  cargo: string;
  mathRecipe: string;
}

const CargoItem: React.FC<CargoItemProps> = ({ color, cargo, mathRecipe }) => {
  return (
    <Container color={color}>
      <div />
      <section>
        <b>{cargo}</b>
        <small>{mathRecipe}</small>
      </section>
      <OptionsIcon />
    </Container>
  );
};

export default CargoItem;
