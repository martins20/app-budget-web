import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(252, 253, 255);
  background: linear-gradient(151deg, rgba(252, 253, 255, 1) 30%, #f0f2fa 100%);

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Modal = styled.div`
  min-width: 70vw;
  height: 80vh;
  box-shadow: 1px 10px 15px 5px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--white);
  margin: 20%;

  @media (max-width: 400px) {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const Image = styled.img`
  display: block;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 10%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const FormContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 10%;
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: var(--error);
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 2.2rem;
    color: var(--black);
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--blue);
    margin-bottom: 100px;

    @media (max-width: 400px) {
      margin-bottom: 20px;
    }
  }
`;

export const SignUpButton = styled.button`
  border-radius: 4px;
  width: 140px;
  height: 40px;

  margin-bottom: 20px;

  font-size: 1em;

  background: var(--blue);
  color: var(--white);
  transition: background 0.2s;

  &:hover {
    cursor: pointer;
    background: var(--purple);
  }
`;

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  small {
    font-size: 0.8em;
    color: var(--gray);

    a {
      color: var(--blue);
      text-decoration: none;
      font-weight: bold;

      transition: background 0.2s;

      &:hover {
        cursor: pointer;
        background: var(--purple);
      }
    }
  }
`;
