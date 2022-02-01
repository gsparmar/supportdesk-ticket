import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Container, Navbar, Nav } from 'react-bootstrap';
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
      <Navbar bg='light' variant='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Support Desk</Navbar.Brand>
          </LinkContainer>
          <Nav className='ms-auto'>
            {user ? (
              <Nav.Link>
                <button onClick={onLogout}>Logout</button>
              </Nav.Link>
            ) : (
              <>
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
