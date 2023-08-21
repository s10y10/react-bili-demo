import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 10px;
  left: 0;
  display: flex;
  z-index: 1000;
  flex-shrink: 0;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    &.active {
      color: #20aae2;
    }
  }
`;
