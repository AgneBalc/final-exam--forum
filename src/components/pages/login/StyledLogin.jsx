import styled from "styled-components";

const StyledLogin = styled.main`
  .errorMsg {
    color: rgb(208, 57, 62);
    font-size: 14px;
  }
  .sign-up {
    color: rgb(108, 107, 107);
    font-size: 13px;
    &::before {
      content: "";
      height: 1px;
      background: #1797a080;
      display: block;
      margin: 1rem;
    }
    p {
      padding: 0.5rem 1rem;
      a {
        color: #1797a0;
      }
    }
  }
  `;

export default StyledLogin;