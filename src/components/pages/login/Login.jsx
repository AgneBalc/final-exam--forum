import StyledLogin from "./StyledLogin";
import Form from "../../UI/form/Form";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

const Login = () => {
  return (
    <StyledLogin>
      <h1>Log In</h1>
      <Form>
        <Input
          label='Email'
          type='email'
          id='email'
        // {...formik.getFieldProps('email')}
        // className={formik.touched.email && formik.errors.email ? 'error' : ''}
        />
        {/* {formik.touched.email && formik.errors.email &&
          <p>{formik.errors.email}</p>} */}
        <Input
          label='Password'
          type='password'
          id='password'
        // {...formik.getFieldProps('password')}
        // className={formik.touched.password && formik.errors.password ? 'error' : ''}
        />
        {/* {formik.touched.password && formik.errors.password &&
          <p>{formik.errors.password}</p>} */}
        <Button type='submit'>Log In</Button>
      </Form>
    </StyledLogin>
  );
}

export default Login;