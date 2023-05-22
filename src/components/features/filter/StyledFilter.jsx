import styled from "styled-components"

const StyledFilter = styled.section`
  height: 61px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  padding: 10px 12px;
  button {
    flex: 1;
    border: none;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #878a8c;
    font-weight: 600;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #dae0e6b8;
    }
    &.selected {
        color: #0079d3;
    }
    i {
      font-size: 20px;
    }
    span {
      font-size: 15px;
    }
  }
`;

export default StyledFilter;