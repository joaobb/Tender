import styled from 'styled-components';

export const Container = styled.nav.attrs({ className: 'shadowed' })`
  position: absolute;
  z-index: 999;

  top: 18px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;

  justify-content: space-between;

  width: 70vw;
  height: 64px;
  margin: 0 auto;
  padding: 0 24px;
  border-radius: 30px;

  background-color: white;

  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;

  svg:first-child {
    font-size: 20px;
    color: black;
  }
`;
