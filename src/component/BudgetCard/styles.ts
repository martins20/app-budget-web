import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);

  width: 100%;
  min-height: 300px;
  height: 300px;

  border-radius: 32px;

  box-shadow: 1px 10px 15px 10px rgba(0, 0, 0, 0.03);

  padding: 40px;

  display: flex;
  flex-direction: column;

  position: relative;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Color = styled.div`
  background: ${props => props.color};
  width: 20px;
  height: 60px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  position: absolute;
  top: 10;
  left: 0;
`;

export const Price = styled.h1`
  font-size: 1.6rem;
  color: var(--black);
`;

export const Days = styled.strong`
  margin-top: 10px;
  font-size: 1rem;
  color: var(--black);
`;

export const Date = styled.span`
  margin-top: 10px;
  margin-bottom: auto;
  font-size: 1rem;
  color: var(--gray);
`;

export const Description = styled.p`
  font
`;

export const Footer = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
