import styled from "styled-components";

const StyledHeader = styled.header`
  height: 4rem;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  box-shadow: 0px 2px 5px 1px #232323;
  z-index: 10;
  .header-container {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    img {
      height: 2.5rem;
    }
    .btn-container {
      display: flex;
      gap: 1rem;
    }
    .loggedIn {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .user-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      >img{
        height: 1.5rem;
      }
    }
  }
`;

export default StyledHeader;