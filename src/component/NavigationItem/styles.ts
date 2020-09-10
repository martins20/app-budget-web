import styled from 'styled-components';

interface ContainerProps {
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: ${props =>
    props.active ? '5px solid var(--purple);' : '5px solid var(--white)'};

  &:hover {
    border-left: 5px solid var(--purple);

    > svg {
      fill: var(--purple);
      opacity: 0.8;
    }
  }

  + div {
    margin-top: 40px;
  }

  > svg {
    fill: ${props => (props.active ? 'var(--purple)' : 'var(--gray)')};
    transition: fill 0.2s;
  }
`;
