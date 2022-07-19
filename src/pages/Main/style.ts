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
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  overflow: auto;
`;

export const NewGameListItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .item-new_game-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }
`;
