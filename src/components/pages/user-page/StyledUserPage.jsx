import styled from "styled-components"

const StyledUserPage = styled.main`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .tabs {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    ul {
      display: flex;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        flex: 1;
        list-style: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        &.selected {
          color: #0079d3;
          border-bottom: 2px solid #0079d3;
        }
      }
    }
  }
`;

export default StyledUserPage;