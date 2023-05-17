import StyledButton from "./StyledButton";

const Button = ({ children, type }) => {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;