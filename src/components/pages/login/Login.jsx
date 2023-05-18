import StyledLogin from "./StyledLogin";
import Form from "../../UI/form/Form";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import UsersContext, { USERS_ACTIONS } from "../../../contexts/users-context";

const Login = () => {
  const [error, setError] = useState('');
  const { users: { users }, dispatchUsers } = useContext(UsersContext);

  const createErrorMsg = (message) => setError(message);

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setError('');

      const existingUser = users.find(user => user.email === values.email);
      const passwordIsMatching = () => existingUser &&
        values.password === existingUser.password ?
        true : false;

      !passwordIsMatching() ?
        createErrorMsg('Incorrect email address or password!') :
        dispatchUsers({
          type: USERS_ACTIONS.LOGIN,
          user: existingUser
        });
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
          className={error ? 'error' : ''}
          {...formik.getFieldProps('email')}
        />
        <Input
          label='Password'
          type='password'
          id='password'
          className={error ? 'error' : ''}
          {...formik.getFieldProps('password')}
        />
        {error && <p className="errorMsg">{error}</p>}
        <Button type='submit'>Log In</Button>
        <div className="sign-up">
          <p>Don't have an account? <a href="/">Sign up</a></p>
        </div>
      </Form>
    </StyledLogin>
  );
}

export default Login;