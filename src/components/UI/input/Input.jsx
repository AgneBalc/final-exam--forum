import StyledInput from "./StyledInput";

const Input = (props) => {
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </StyledInput>
  );
}

export default Input;