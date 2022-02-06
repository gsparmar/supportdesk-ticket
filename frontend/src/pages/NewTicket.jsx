import { useState } from 'react';
import { useSelector } from 'react-redux';
const { Container, Form, Button } = require('react-bootstrap');

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <div className='text-center'>
          <p className='h1'>Create New Ticket</p>
          <p className='h3 py-3 text-muted'>Please fill out the form below</p>
        </div>

        <div>
          <Form.Group className='mb-3'>
            <Form.Label>Customer Name</Form.Label>
            <Form.Control type='text' value={name} disabled />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Customer Email</Form.Label>
            <Form.Control type='email' value={email} disabled />
          </Form.Group>
          <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Product</Form.Label>
              <Form.Select
                name='product'
                value={product}
                id='product'
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value='iPhone'>iPhone</option>
                <option value='iPad'>iPad</option>
                <option value='Macbook Pro'>Macbook Pro</option>
                <option value='iMac'>iMac</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description of the issue</Form.Label>
              <Form.Control
                as='textarea'
                value={description}
                id='description'
                name='description'
                style={{ height: '100px' }}
                placeholder='Describe the issue.'
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <div className='d-grid gap 2'>
                <Button variant='primary' type='submit' size='lg'>
                  Submit
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default NewTicket;
