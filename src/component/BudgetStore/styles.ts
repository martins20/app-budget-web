import styled from 'styled-components';

export const Store = styled.div`
  > button {
    margin-top: 20px;
    background: var(--purple);

    flex-shrink: 0;

    font-weight: bold;
    text-transform: uppercase;
    color: var(--white);

    width: 150px;
    height: 50px;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;

  width: 100%;
  height: 100%;
  opacity: 0.6;

  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;

  @media (max-width: 1500px) {
    padding: 0 20%;
    grid-template-columns: repeat(1, 1fr);
    margin-left: 5%;
  }

  @media (max-width: 700px) {
    padding: 0;
    margin-top: 200px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
