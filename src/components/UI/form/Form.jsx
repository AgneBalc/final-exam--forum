import StyledForm from "./StyledForm";

const Form = ({ children }) => {
  return (
    <StyledForm>
      {children}
    </StyledForm>
  );
}

export default Form;