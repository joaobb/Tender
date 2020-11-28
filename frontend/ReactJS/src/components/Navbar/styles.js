import styled from 'styled-components';

export const Container = styled.nav`
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
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1);

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
