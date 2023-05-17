import StyledInput from "./StyledInput";

const Input = (props) => {
  return (
    <StyledInput>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className}
      />
    </StyledInput>
  );
}

export default Input;