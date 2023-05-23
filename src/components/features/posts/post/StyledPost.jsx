import styled from "styled-components";

const StyledPost = styled.div`
  width: 100%;
  position: relative;
  padding: 0.5rem 0.5rem 0.75rem 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  .was-edited {
    position: absolute;
    font-size: 12px;
    font-style: italic;
    color: #787c7ec4;
    right: 3.2rem;
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
  .openMenu {
    position: absolute;
    right: 0.5rem;
    top: 0;
    padding: 0.5rem 0.75rem;
    i {
      color: #898989;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: #000;
      }
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
    i {
      font-size: 1.5rem;
      color: #9a9ea0;
      cursor: pointer;
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
      object-fit: contain;
      &.all-posts {
        max-height: 500px;
      }
      &.post-page{
        max-height: 700px;
      }
    }
    .text {
      font-size: 14px;
      word-wrap: break-word;
      color: rgb(28, 28, 28);
      font-weight: 300;
      &.all-posts {
        max-height: 100px;
        overflow: hidden;
        -webkit-mask-image: linear-gradient(180deg,#000 60%,transparent);
        mask-image: linear-gradient(180deg,#000 60%,transparent);
      }
    }
  }
  .comments-number {
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