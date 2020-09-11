import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;

  grid-area: CB;

  background: var(--white);

  margin: 40px 0;

  border-top-left-radius: 65px;
  border-bottom-left-radius: 65px;

  box-shadow: 1px 10px 15px 10px rgba(0, 0, 0, 0.03);
  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 500px;
  border-bottom: 0.5px solid var(--light-gray);

  h1 {
    margin: 35px 0;
    color: var(--back);
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 20px 0;
    object-fit: cover;

    box-shadow: 0 1px 30px rgba(90, 42, 255, 0.2);
  }

  b {
    color: var(--black);
    font-size: 1.5rem;
  }

  small {
    color: var(--gray);
    font-size: 1.1rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 50%;
  padding: 20px 40px;

  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
