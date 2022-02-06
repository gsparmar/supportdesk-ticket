import { FaSignInAlt, FaSignOutAlt, FaUser, FaHome } from 'react-icons/fa';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset, logout } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Support Desk</Navbar.Brand>
          <Nav className='ms-auto'>
            {user ? (
              <Nav.Link>
                <Button variant='primary' onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </Button>
              </Nav.Link>
            ) : (
              <>
                <LinkContainer to='/'>
                  <Nav.Link>
                    <FaHome /> Home
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaSignInAlt /> Login
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>
                    <FaUser /> Register
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
    // <header className='header'>
    //   <div className='logo'>
    //     <Link to='/'>Support Desk</Link>
    //   </div>
    //   <ul>
    //     <li>
    //       <Link to='/login'>
    //         <FaSignInAlt /> Login
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to='/register'>
    //         <FaUser /> Register
    //       </Link>
    //     </li>
    //   </ul>
    // </header>
  );
}

export default Header;
