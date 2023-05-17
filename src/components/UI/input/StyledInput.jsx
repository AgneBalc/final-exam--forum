import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  >label {
  font-weight: 500;
  letter-spacing: 0.5px;
  }
  >input {
    height: 2rem;
    padding: 3px 7px;
    border: 1px solid rgb(166, 166, 166);
    border-radius: 3px;
  }
`;

export default StyledInput;