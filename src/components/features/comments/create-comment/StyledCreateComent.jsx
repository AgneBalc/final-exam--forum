import styled from "styled-components"

const StyledCreateComment = styled.section`
  display: flex;
  gap: 0.5rem;
  width: 650px;
  img {
    width: 2rem;
    align-self: flex-start;
  }
  form {
    width: 100%;
    background-color: #f0f2f5;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    textarea {
      border: none;
      resize: none;
      word-wrap: break-word;
      outline: none;
      background-color: #f0f2f5;
      width: 100%;
      height: 50px;
      &::placeholder {
        font-size: 14px;
        font-weight: 300;
        color: #787c7ec4;
      }
    }
    button {
      border: none;
      align-self: flex-end;
      padding-right: 0.5rem;
      &:not(button[disabled]) {
        color: #0665fc;
        cursor: pointer;
      }
      i {
        font-size: 1.1rem;
      }
    }
  }
`;

export default StyledCreateComment;