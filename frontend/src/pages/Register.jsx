import { Fragment, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

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

    if (password !== password2) {
      toast.error('Passwords do not match');
    }
  };

  return (
    <Fragment>
      <div className='text-center'>
        <p className='h1'>
          <FaUser /> Register
        </p>
        <p className='h3 py-3 text-muted'>Please create an account</p>
      </div>

      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Please enter your name'
              name='name'
              id='name'
              value={name}
              onChange={onChange}
              required
            />
          </Form.Group>

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

          <Form.Group className='mb-3'>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              name='password2'
              id='password2'
              value={password2}
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

export default Register;
