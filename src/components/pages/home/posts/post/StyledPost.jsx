import styled from "styled-components";

const StyledPost = styled.div`
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  padding: 0.5rem 0.5rem 0.75rem 40px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &:hover {
    border: 1px solid #898989;
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
    i {
      font-size: 1.5rem;
      color: #9a9ea0;
      &:first-child:hover {
        color: rgb(0, 121, 211);
      }
      &:last-child:hover {
        color: rgb(208, 57, 62);
      }
    }
    span {
      font-size: 14px;
      font-weight: 700;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 0.5rem;
    p:first-child {
      font-size: 12px;
      color: #787C7E;
    }
    h2 {
      font-size: 20px;
      font-weight: 500;
      overflow-wrap: break-word;
    }
    >img {
      max-height: 500px;
      object-fit: contain;
    }
    .text {
      max-height: 100px;
      overflow: hidden;
      font-size: 14px;
      word-wrap: break-word;
      color: rgb(28, 28, 28);
      font-weight: 300;
      -webkit-mask-image: linear-gradient(180deg,#000 60%,transparent);
      mask-image: linear-gradient(180deg,#000 60%,transparent);
    }
  }
  .comments {
    display: flex;
    align-items: center;
    color: #898989;
    padding-top: 0.5rem;
    gap: 0.5rem;
    i {
      font-size: 18px;
    }
    p {
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export default StyledPost;