import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    li {
      &.active {
        color: blue;
        text-decoration: underline solid blue;
      }
    }
  }
`;

export const NewGameListWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NewGameListItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
