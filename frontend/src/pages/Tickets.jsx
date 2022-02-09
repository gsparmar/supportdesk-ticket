import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const dispatch = useDispatch();
  //dismount // removes console error
  //   useEffect(() => {
  //     if (isSuccess) {
  //       dispatch(reset());
  //     }
  //   }, []);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  if (isLoading) {
    return (
      <Container className='d-flex justify-content-center'>
        <Spinner variant='primary' animation='grow' className='d-flex p-2' />
      </Container>
    );
  }
  return (
    <>
      <Container>
        <BackButton url='/' />
        <div className='text-center'>
          <p className='h1 fs-1'>Tickets</p>
        </div>
        <div>{console.log(tickets)}</div>
      </Container>

      <Container className='text-center mt-3 '>
        <Row className='mb-3 fs-4 '>
          <Col>Date</Col>
          <Col>Product</Col>
          <Col>Status</Col>
        </Row>
        {tickets.map((ticket) => (
          <TicketItem ticket={ticket} key={ticket._id} />
        ))}
      </Container>
    </>
  );
};

export default Tickets;
