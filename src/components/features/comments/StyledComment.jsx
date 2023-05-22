import styled from "styled-components"

const StyledComment = styled.div`
  max-width: 650px;
  position: relative;
  .content {
    display: flex;
    gap: 0.5rem;
    font-size: 14px;
    img {
      width: 32px;
      align-self: flex-start;
    }
    .wrapper {
      background-color: #f0f2f5;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      .user-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-bottom: 0.25rem;
        .username {
          font-weight: 600;
        }
        .time {
          font-size: 12px;
          color: #787C7E;
        }
      }
      .text {
        word-wrap: break-word;
        font-weight: 300;
      }
      .edit-form {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        textarea {
          border: none;
          resize: none;
          word-wrap: break-word;
          outline: none;
          width: 578px;
          height: 70px;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          &::placeholder {
            font-size: 14px;
            font-weight: 300;
            color: #787c7ec4;
          }
        }
        .buttons {
          display: flex;
          gap: 1rem;
          align-self: flex-end;
          padding-right: 0.5rem;
          button {
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            i {
              font-size: 18px;
            }
            &:first-child {
              color: rgb(208, 57, 62);
            }
            &:last-child {
              color: rgb(0, 121, 211);
              &:disabled {
                color: rgba(16, 16, 16, 0.3);
              }
            }
          }
        }
      }
    }
  }
  .votes {
    padding-left: 45px;
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
    span {
      font-size: 12px;
      font-weight: 600;
    }
    i {
      font-size: 20px;
      cursor: pointer;
      color: #9a9ea0;
      &:first-child:hover {
        color: rgb(0, 121, 211);
      }
      &:last-child:hover {
        color: rgb(208, 57, 62);
      }
    }
  }
  .was-edited {
    font-size: 12px;
    font-style: italic;
    color: #787c7ec4;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    padding-left: 0.25rem;
  }
  .openMenu {
    position: absolute;
    right: 0.5rem;
    top: 0;
    padding: 0.5rem 0.75rem;
    i {
      color: #898989;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
  }
`;

export default StyledComment;