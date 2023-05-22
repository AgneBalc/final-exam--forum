import styled from "styled-components"

const StyledCommentMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0.5rem;
  width: 180px;
  z-index: 100;
  background-color: #fff;
  font-size: 15px;
  color: #000;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.4rem;
  box-shadow: 1px 1px 4px 0px #898989, -1px -1px 4px 0px #898989;
  >div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export default StyledCommentMenu;