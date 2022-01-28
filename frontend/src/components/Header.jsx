import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg='light' variant='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Support Desk</Navbar.Brand>
          </LinkContainer>
          <Nav className='ms-auto'>
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
