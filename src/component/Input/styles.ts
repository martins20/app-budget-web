import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin-top: 20px;

  label {
    text-transform: uppercase;
    color: var(--black);
    font-size: 16px;
  }

  input {
    padding-top: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--light-gray);

    ::placeholder {
      color: var(--light-gray);
    }
  }
`;
