import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  height: 100%;
  width: 100%;
  max-width: 1500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 600px) {
    margin-top: 180px;
  }
`;
