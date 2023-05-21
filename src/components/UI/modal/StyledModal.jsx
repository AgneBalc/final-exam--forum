import styled from "styled-components"

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  &.edit-modal {
    background: rgba(0, 0, 0, 0.343);
    backdrop-filter: blur(2px);
  }
`;

const StyledModal = styled.div`
  position: fixed;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  &.edit-modal {
    inset: 0;
    width: 740px;
    height: 507px;
    margin: auto;
    border-radius: 4px;
  }
`;

export { StyledBackdrop, StyledModal };