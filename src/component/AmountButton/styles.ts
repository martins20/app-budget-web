import styled from 'styled-components';

export const Container = styled.div`
  background: var(--light-purple);
  width: 200px;
  height: 200px;
  flex-shrink: 0;

  box-shadow: 1px 10px 15px 10px rgba(0, 0, 0, 0.03);

  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 32px;

  @media (max-width: 1500px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const SumIcon = styled.span`
  font-size: 4rem;
  color: var(--black);
`;

export const Label = styled.span`
  font-size: 1.3rem;
  color: var(--black);
`;

export const Value = styled.span`
  font-size: 1.3rem;
  color: var(--black);
`;

export const DecreseButton = styled.div`
  position: absolute;
  z-index: 3;

  left: 0;
  bottom: 0px;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  background: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3.5rem;
  text-align: center;

  padding-bottom: 5px;

  border: 1px solid black;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;
