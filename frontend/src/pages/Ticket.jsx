import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, reset, closeTicket } from '../features/tickets/ticketSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Spinner, Card, Button } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import { toast } from 'react-toastify';

const Ticket = () => {
  const { ticket, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const params = useParams();
  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    // eslint-disable-next-line
  }, [isError, message, isSuccess, ticketId]);

  // close ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket Closed');
    navigate('/tickets');
  };

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
            {ticket.status !== 'closed' && (
              <Button onClick={onTicketClose} variant='primary'>
                Close Ticket
              </Button>
            )}
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
