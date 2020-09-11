import styled from 'styled-components';
import { CreateBudgetIcon } from '../../styles/icons';

export const Container = styled.div`
  grid-area: MC;

  background: var(--main-background);

  padding: 80px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 60px;
`;

export const SearchButton = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  border-bottom: 2px solid var(--purple);
  cursor: pointer;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  border-bottom: 2px solid var(--light-gray);

  padding: 20px;

  color: var(--black);
  font-size: 1rem;

  ::placeholder {
    color: var(--gray);
  }
`;

export const NotificationContainer = styled.div`
  height: 100%;
  width: 110px;
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.div`
  margin-top: 40px;

  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AddIcon = styled(CreateBudgetIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  > button {
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
  .unable {
    background: var(--gray);
    &:hover {
      cursor: default;
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-right: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > span {
    font-size: 1.2rem;
    color: var(--gray);
    margin-right: 40px;
  }

  > strong {
    font-size: 1.3rem;
    color: var(--black);
    margin-right: 10px;
  }

  &:hover {
    > strong,
    svg {
      opacity: 0.4;
    }

    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 80px;
  }
`;
