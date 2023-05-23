const { default: styled } = require("styled-components");

const StyledPostPage = styled.main`
  width: 740px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  .close {
    position: absolute;
    top: 0.75rem;
    right: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 4px;
    border: none;
    background-color: inherit;
    i {
      font-size: 1rem;
    }
  }
  .all-comments {
    padding: 2rem 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

export default StyledPostPage;