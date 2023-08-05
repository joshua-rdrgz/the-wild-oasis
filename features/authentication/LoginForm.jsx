import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';
import FormRowVertical from '../../ui/FormRowVertical';
import { useLogin } from './useLogin';

const P = styled.p`
  text-align: center;
`;

const Span = styled.span`
  display: block;
  font-weight: 700;
`;

function LoginForm() {
  const [email, setEmail] = useState('demouser@email.com');
  const [password, setPassword] = useState('pass1234');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <P>
        Automatically defaults to demo user: <Span>demouser@email.com</Span>
      </P>
      <FormRowVertical label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <P>
        Automatically defaults to demo password: <Span>pass1234</Span>
      </P>
      <FormRowVertical>
        <Button size='large' disabled={isLoading}>
          {!isLoading ? 'Log in' : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
