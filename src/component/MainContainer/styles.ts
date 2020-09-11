import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MC;

  background: var(--main-background);

  padding: 80px;
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
`;

export const Title = styled.h1`
  font-size: 3rem;
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
`;

export const SelectButton = styled.div``;

export const DropBoxMenuIcon = styled.div``;
