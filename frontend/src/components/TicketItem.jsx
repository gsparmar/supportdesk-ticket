import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const TicketItem = ({ ticket }) => {
  return (
    <>
      <Container className='text-center mb-3'>
        <LinkContainer
          style={{ cursor: 'pointer' }}
          to={`/ticket/${ticket._id}`}
        >
          <Row className='fs-6 justify-content-md-center text-nowrap p-2 bg-light border'>
            <Col>{new Date(ticket.createdAt).toLocaleString('en-US')}</Col>
            <Col>{ticket.product}</Col>
            <Col>{ticket.status}</Col>
          </Row>
        </LinkContainer>
      </Container>
    </>
  );
};

export default TicketItem;
