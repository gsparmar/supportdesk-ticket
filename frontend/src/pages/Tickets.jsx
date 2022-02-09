import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import { Spinner, Button, Container } from 'react-bootstrap';
import BackButton from '../components/BackButton';

const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const dispatch = useDispatch();
  //dismount // removes console error
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Container className='d-flex justify-content-center'>
        <Spinner variant='primary' animation='grow' className='d-flex p-2' />
      </Container>
    );
  }
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Tickets;
