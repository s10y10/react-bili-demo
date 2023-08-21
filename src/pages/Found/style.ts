import styled from 'styled-components';

export const FoundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FoundListWrapper = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  overflow: auto;
`;

export const FoundListItemWrapper = styled.div`
  display: flex;
  width: 100%;
  .item-found_game-content {
    width: 100%;
    text-align: left;
    img {
      max-width: 100%;
    }
  }
`;
