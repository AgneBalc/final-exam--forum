import styled from "styled-components";

const StyledEmptyTab = styled.section`
  .container {
    position: relative;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    height: 90px;
    background-color: #e6eaee;
    display: flex;
    align-items: center;
    justify-content: center;
    >p {
      padding-left: 40px;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .votes {
    width: 40px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5rem 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    div {
      height: 1rem;
      width: 1rem;
    }
    i {
      font-size: 20px;
      color: #9a9ea0;
    }
  }
`;

export default StyledEmptyTab;