import styled from "styled-components";

const StyledEditPost = styled.div`
padding: 1rem;
  h2 {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 1rem;
  }
  section {
    background-color: #fff;
    border-radius: 4px;
  }
  .tabs {
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
      color: #878a8c;
      /* border-width: 0px 1px 1px 0px;
      border-style: solid;
      border-bottom-color: #edeff1;
      border-right-color: #edeff1; */
      border: 1px solid #1797a04f;
      background-color: #fff;
      &:hover {
        background-color: #f6f7f8;
      }
      &.selected {
        color: #0079d3;
        border-width: 1px 1px 2px 1px;
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
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
    input,
    textarea {
      border-radius: 4px;
      border: 1px solid #1797a04f;
      padding: 0.5rem 1rem;
      font-size: 14px;
      outline: none;
      &:focus {
        border: 1px solid rgb(26, 26, 27);
      }
    }
    input[type='text'] {
      height: 39px;
    }
    input[type='url'] {
      height: 66px;
      overflow-wrap: break-word;
    }
    textarea {
      width: 100%;
      height: 250px;
      resize: none;
      word-wrap: break-word;
    }
  }
  .buttons {
    align-self: flex-end;
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
    button:first-child {
      border: 1px solid rgb(208, 57, 62);
      &:hover {
        background-color: rgb(208, 57, 62);
        color: #fff;
      }
    }
    button[type='submit'] {
      background-color: #1797a0;
      color: #fff;
    }
  }
`;

export default StyledEditPost;