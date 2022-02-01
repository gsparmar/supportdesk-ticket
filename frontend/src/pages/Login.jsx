import { Fragment, useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Form, Button, Spinner, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // display error message
    if (isError) {
      toast.error(message);
    }

    // redirect if logged in
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, message, user, navigate, dispatch]);

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

  if (isLoading) {
    return (
      <Container className='d-flex justify-content-center'>
        <Spinner variant='primary' animation='border' className='d-flex p-2' />
      </Container>
    );
  }

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
