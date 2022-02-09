import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';
function Home() {
  return (
    <Fragment>
      <div className='text-center'>
        <p className='h1'>What do you need help with?</p>
        <p className='h3 py-3 text-muted'>
          Please choose from the options below
        </p>
      </div>
      <LinkContainer to='/new-ticket'>
        <div className='d-grid gap 2 mb-3'>
          <Button variant='primary' type='submit' size='lg'>
            <FaQuestionCircle /> Create New Ticket
          </Button>
        </div>
      </LinkContainer>
      <LinkContainer to='/tickets'>
        <div className='d-grid gap 2 mb-3'>
          <Button variant='dark' type='submit' size='lg'>
            <FaTicketAlt /> View My Tickets
          </Button>
        </div>
      </LinkContainer>
    </Fragment>
  );
}

export default Home;
