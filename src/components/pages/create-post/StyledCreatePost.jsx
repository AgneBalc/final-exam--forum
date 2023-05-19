import styled from "styled-components";

const StyledCreatePost = styled.main`
  width: 514px;
  .tabs {
    button {
      display: flex;
      padding: 14px 0;
      cursor: pointer;
      font-weight: 700;
      color: #878a8c80;
      border-width: 0px 1px 1px 0px;
      border-bottom-color: #edeff1;
      border-right-color: #edeff1;
      &:hover {
        background-color: #dae0e6;
      }
      &.selected {
        color: #0079d3;
        border-width: 0px 1px 2px 0px;
        border-bottom-color: #0079d3;
      }
    }
  }
`;

export default StyledCreatePost;