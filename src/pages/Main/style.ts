import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-bottom: 6px;
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
  height: calc(100% - 20px - 6px - 50px);
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  overflow: auto;
`;

export const NewGameListItemWrapper = styled.div`
  width: 100%;
  display: flex;
  .item-new_game-content {
    width: 100%;
    display: flex;
    margin-top: 6px;
    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }
`;

export const FocusGameListWrapper = styled.section`
  width: 100%;
  height: calc(100% - 48px - 50px);
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  overflow: auto;
`;

export const FocusGameIconWrapper = styled.div`
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
