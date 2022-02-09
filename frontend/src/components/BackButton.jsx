import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const BackButton = ({ url }) => {
  return (
    <>
      <Link to={url}>
        <Button variant='mute'>
          <FaArrowAltCircleLeft /> Back
        </Button>
      </Link>
    </>
  );
};

export default BackButton;
