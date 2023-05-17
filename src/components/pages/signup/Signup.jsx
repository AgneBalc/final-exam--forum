import { useContext, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { v4 as generatedId } from 'uuid';
import Button from "../../UI/button/Button";
import Form from "../../UI/form/Form";
import Input from "../../UI/input/Input"
import StyledSignup from "./StyledSignup";
import UsersContext, { USERS_ACTIONS } from '../../../contexts/users-context';

const Signup = () => {
  const { users: { users }, dispatchUsers } = useContext(UsersContext);
  const [existingUser, setExistingUser] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        'Invalid Email!'
      )
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

  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    picture: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setExistingUser(false);

      const isExisting = users.find(user => user.email === values.email);
      if (isExisting) {
        setExistingUser(true);
        return;
      };

      const newUser = {
        id: generatedId(),
        username: values.username,
        email: values.email,
        password: values.password,
        picture: values.picture ||
          'https://cdn-icons-png.flaticon.com/512/552/552721.png',
      };

      dispatchUsers({
        type: USERS_ACTIONS.ADD,
        user: newUser,
      });
    }
  });

  return (
    <StyledSignup>
      <h1>Sign Up</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          label='Email'
          type='email'
          id='email'
          {...formik.getFieldProps('email')}
          className={formik.touched.email && formik.errors.email ? 'error' : ''}
        />
        {formik.touched.email && formik.errors.email &&
          <p>{formik.errors.email}</p>}
        {existingUser &&
          <p>User with this e-mail already exists!</p>
        }
        <Input
          label='Username'
          type='text'
          id='username'
          {...formik.getFieldProps('username')}
          className={formik.errors.username ? 'error' : ''}
        />
        {formik.touched.username && formik.errors.username &&
          <p>{formik.errors.username}</p>}
        {/* Nice! Username available */}
        <Input
          label='Picture (URL)'
          type='url'
          id='picture'
          placeholder='optional'
          {...formik.getFieldProps('picture')}
          className={formik.touched.picture && formik.errors.picture ? 'error' : ''}
        />
        {formik.touched.picture && formik.errors.picture &&
          <p>{formik.errors.picture}</p>}
        <Input
          label='Password'
          type='password'
          id='password'
          {...formik.getFieldProps('password')}
          className={formik.touched.password && formik.errors.password ? 'error' : ''}
        />
        {formik.touched.password && formik.errors.password &&
          <p>{formik.errors.password}</p>}
        <Input
          label='Re-enter password'
          type='password'
          id='passwordConfirm'
          {...formik.getFieldProps('passwordConfirm')}
          className={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? 'error' : ''}
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
          <p>{formik.errors.passwordConfirm}</p>}
        <Button type='submit'>Sign Up</Button>
      </Form>
    </StyledSignup>
  );
}

export default Signup;