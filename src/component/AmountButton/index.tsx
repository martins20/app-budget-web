import React, { useState } from 'react';

import {
  ButtonWrapper,
  Container,
  SumIcon,
  Label,
  Value,
  DecreseButton,
} from './styles';

interface AmountInterface {
  label: string;
}

const AmountButton: React.FC<AmountInterface> = ({
  label,
}: AmountInterface) => {
  const [amountValue, setAmountValue] = useState(0);

  const increase = () => {
    setAmountValue(amountValue + 1);
  };

  const decrease = () => {
    if (amountValue === 0) return;
    setAmountValue(amountValue - 1);
  };

  return (
    <ButtonWrapper>
      <Container onClick={increase}>
        <SumIcon>+</SumIcon>
        <Label>{label}</Label>
        <Value>{amountValue}</Value>
      </Container>

      <DecreseButton onClick={decrease}>-</DecreseButton>
    </ButtonWrapper>
  );
};
export default AmountButton;
