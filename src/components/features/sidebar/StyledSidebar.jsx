import styled from "styled-components"

const StyledSidebar = styled.section`
  width: 312px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 14px;
  font-weight: 300;
  >div {
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    .content {
      padding: 12px;
    }
    h3 {
      font-weight: 600;
      letter-spacing: 0.5px;
      background-color: #0079d3;
      padding: 12px;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      color: #fff;
    }
    button {
      width: 100%;
      border-radius: 20px;
      height: 2rem;
      border: none;
      margin-top: 1rem;
      background-color: #0079d3a6;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
    }
    ol {
      padding-left: 1rem;
      li {
        padding: 0.25rem 0;
      }
    }
  }
`;

export default StyledSidebar;