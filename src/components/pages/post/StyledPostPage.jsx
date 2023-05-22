const { default: styled } = require("styled-components");

const StyledPostPage = styled.main`
  width: 740px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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