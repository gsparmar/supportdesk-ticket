import { Fragment, useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // checking console log
    // console.log(`${e.target.name}: ${e.target.value}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <Fragment>
      <div className='text-center'>
        <p className='h1'>
          <FaSignInAlt /> Login
        </p>
        <p className='h3 py-3 text-muted'>Please log in to get support</p>
      </div>

      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Please enter your email'
              name='email'
              id='email'
              value={email}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Control
              type='password'
              placeholder='Enter password'
              name='password'
              id='password'
              value={password}
              onChange={onChange}
              required
            />
          </Form.Group>

          <div className='d-grid gap 2'>
            <Button variant='primary' type='submit' size='lg'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Fragment>
  );
}

export default Login;
