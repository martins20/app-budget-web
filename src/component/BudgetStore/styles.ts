import styled from 'styled-components';

export const Store = styled.div`
  > span {
    color: var(--error);
  }

  @media (max-width: 600px) {
    margin-top: 200px;
  }

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
