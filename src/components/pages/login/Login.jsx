import StyledLogin from "./StyledLogin";
import Form from "../../UI/form/Form";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import { useFormik } from "formik";

const Login = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <StyledLogin>
      <h1>Log In</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          label='Email'
          type='email'
          id='email'
          {...formik.getFieldProps('email')}
        />
        <Input
          label='Password'
          type='password'
          id='password'
          {...formik.getFieldProps('password')}
        />
        <Button type='submit'>Log In</Button>
      </Form>
    </StyledLogin>
  );
}

export default Login;