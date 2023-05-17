import Button from "../../UI/button/Button";
import Form from "../../UI/form/Form";
import Input from "../../UI/input/Input"

const Signup = () => {
  return (
    <main>
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
        <p>Password must contain at least eight characters, including at least 1 letter and 1 number.</p>
        <Input
          label='Re-enter password'
          type='password'
          id='password'
        />
        <Button>Sign Up</Button>
      </Form>
    </main>
  );
}

export default Signup;