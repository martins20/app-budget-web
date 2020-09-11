import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 30px;

  :last-child {
    margin: 0;
  }

  > div {
    width: 20px;
    height: 20px;
    margin-right: 20px;

    background: ${props => props.color};
    border-radius: 50%;
  }

  > section {
    display: flex;
    flex-direction: column;

    margin-right: auto;

    > b {
      font-size: 18px;
      color: var(--black);
    }

    > small {
      color: var(--gray);
      font-size: 14px;
    }
  }
`;
