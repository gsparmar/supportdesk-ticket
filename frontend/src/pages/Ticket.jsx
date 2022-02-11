import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
import { getNotes, reset as notesReset } from '../features/notes/noteSlice';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Spinner, Card, Button, Modal, Form } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import NoteItem from '../components/NoteItem';
import { toast } from 'react-toastify';

const Ticket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState('');

  const { ticket, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  const { user } = useSelector((state) => state.auth);

  const params = useParams();
  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
    // eslint-disable-next-line
  }, [isError, message, isSuccess, ticketId]);

  // close ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket Closed');
    navigate('/tickets');
  };

  //open modal

  const openModal = () => {
    setModalIsOpen(true);
  };

  // close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // create note submit
  const onNoteSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    closeModal();
  };

  if (isLoading && notesIsLoading) {
    return (
      <Container className='d-flex justify-content-center'>
        <Spinner variant='primary' animation='grow' className='d-flex p-2' />
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <BackButton url='/tickets' />
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
      <br />

      <div>
        {notes.map((note) => (
          <NoteItem note={note} key={note._id} />
        ))}
      </div>

      {/* modal */}
      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onNoteSubmit}>
            <Form.Group>
              <Form.Control
                as='textarea'
                value={noteText}
                id='noteText'
                name='noteText'
                style={{ height: '100px' }}
                placeholder='Note text'
                onChange={(e) => setNoteText(e.target.value)}
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
        </Modal.Body>
      </Modal>

      {ticket.status !== 'closed' && (
        <Button variant='primary' onClick={openModal}>
          <FaPlus /> Add Note
        </Button>
      )}
    </div>
  );
};

export default Ticket;
