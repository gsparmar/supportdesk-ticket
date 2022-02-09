import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NewTicket from './pages/NewTicket';
import { Fragment } from 'react';
import PrivateRoute from './components/PrivateRoute';
import Tickets from './pages/Tickets';
function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <main className='py-5'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/new-ticket' element={<PrivateRoute />}>
                <Route path='/new-ticket' element={<NewTicket />} />
              </Route>
              <Route path='/tickets' element={<PrivateRoute />}>
                <Route path='/tickets' element={<Tickets />} />
              </Route>
            </Routes>
          </Container>
        </main>
      </Router>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
