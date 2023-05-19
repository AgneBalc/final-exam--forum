import styled from "styled-components";

const StyledCreatePost = styled.main`
  width: 740px;
  .tabs {
    padding: 0 15px;
    height: 50px;
    display: flex;
    button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      height: 100%;
      cursor: pointer;
      color: #878a8c80;
      border-width: 0px 1px 1px 0px;
      border-bottom-color: #edeff1;
      border-right-color: #edeff1;
      background-color: #fff;
      &:hover {
        background-color: #dae0e6;
      }
      &.selected {
        color: #0079d3;
        border-width: 0px 1px 2px 0px;
        border-bottom-color: #0079d3;
      }
      span {
        font-weight: 700;
        font-size: 14px;
      }
      i {
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
`;

export default StyledCreatePost;