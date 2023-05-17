import * as yup from 'yup';
import Button from "../../UI/button/Button";
import Form from "../../UI/form/Form";
import Input from "../../UI/input/Input"
import StyledSignup from "./StyledSignup";

const Signup = () => {

  const validationSchema = yup.object({
    email: yup
      .string()
      .trim()
      .required('Required field!'),
    username: yup
      .string()
      .trim()
      .min(3, 'Username is too short! Must be at least 3 characters')
      .max(20, 'Username is too long! Must be 15 characters or less')
      .required('Required field!'),
    picture: yup
      .string()
      .trim()
      .matches(
        /\bhttps?:\/\/\S+?\.(?:png|jpe?g|gif|bmp)\b/,
        'Invalid URL!'
      ),
    password: yup
      .string()
      .trim()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        "Password must contain at least eight characters, including at least 1 letter and 1 number."
      )
      .required('Required field!'),
    passwordConfirm: yup
      .mixed()
      .oneOf([yup.ref('password')], "Passwords don't match!")
      .required('Required field!')
  });

  return (
    <StyledSignup>
      <h1>Sign Up</h1>
      <Form>
        <Input
          label='Email'
          type='email'
          id='email'
        />
        <Input
          label='Username'
          type='text'
          id='username'
        />
        {/* Nice! Username available */}
        <Input
          label='Picture (URL)'
          type='url'
          id='picture'
        />
        <Input
          label='Password'
          type='password'
          id='password'
        />
        <Input
          label='Re-enter password'
          type='password'
          id='password'
        />
        <Button>Sign Up</Button>
      </Form>
    </StyledSignup>
  );
}

export default Signup;