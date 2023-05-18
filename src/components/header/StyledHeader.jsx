import styled from "styled-components";

const StyledHeader = styled.header`
  height: 4rem;
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
    margin: 0 1.5rem;
    height: 100%;
    margin: 0 auto;
    img {
      height: 100%;
      padding: 0.75rem 0;
    }
    .btn-container {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default StyledHeader;