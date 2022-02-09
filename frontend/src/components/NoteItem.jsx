import { useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
const NoteItem = ({ note }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
            Note created by {user.name} at:{' '}
            {new Date(note.createdAt).toLocaleString('en-US')}
          </Card.Header>
          <Card.Body>
            <p className='fs-4'>{note.text}</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default NoteItem;
