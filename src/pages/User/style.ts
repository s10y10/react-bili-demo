import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  .swiper {
    width: 100%;
    height: 224px;
    .item-content {
      display: flex;
      align-items: center;
      height: 100%;
      img {
        width: 100%;
      }
    }
  }
`;
