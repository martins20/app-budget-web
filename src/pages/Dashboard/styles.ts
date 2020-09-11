import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 120px auto 400px;
  grid-template-rows: 100vh;

  grid-template-areas: 'NB MC CB';

  height: 100vh;

  background: var(--main-background);

  @media (max-width: 1200px) {
    grid-template-columns: 0px auto 0px;
  }
`;
