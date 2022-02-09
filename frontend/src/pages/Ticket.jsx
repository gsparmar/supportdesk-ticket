import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, reset } from '../features/tickets/ticketSlice';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Card, Button } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import { toast } from 'react-toastify';

const Ticket = () => {
  const { ticket, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );

  const params = useParams();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    // eslint-disable-next-line
  }, [isError, message, isSuccess, ticketId]);

  if (isLoading) {
    return (
      <Container className='d-flex justify-content-center'>
        <Spinner variant='primary' animation='grow' className='d-flex p-2' />
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <BackButton url='/' />
        <Card className='text-center'>
          <Card.Header className='d-flex justify-content-between fs-6'>
            Ticket ID: {ticket._id}{' '}
            <span className='fs-6'>Ticket Status: {ticket.status}</span>
          </Card.Header>
          <Card.Body>
            <Card.Title>{ticket.product}</Card.Title>
            <Card.Text>{ticket.description}</Card.Text>
            <Button variant='primary'>{ticket.status}</Button>
          </Card.Body>
          <Card.Footer className='text-muted'>
            Created at: {new Date(ticket.createdAt).toLocaleString('en-US')}
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Ticket;
