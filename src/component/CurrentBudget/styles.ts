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

  height: 50%;
  border-bottom: 0.5px solid var(--light-gray);

  h1 {
    color: var(--back);
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 20px 0;

    box-shadow: 0 1px 30px rgba(90, 42, 255, 0.2);
  }

  b {
    color: var(--black);
  }

  small {
    color: var(--gray);
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 50%;
  border: 1px solid red;
  padding: 20px 40px;
`;

export const CargoItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    width: 20px;
    height: 20px;
    margin-right: 20px;

    background: var(--purple);
    border-radius: 50%;
  }

  section {
    display: flex;
    flex-direction: column;

    margin-right: auto;

    b {
      font-size: 18px;
      color: var(--black);
    }

    > small {
      color: (--light-gray);
    }
  }
`;
