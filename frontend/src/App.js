import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Fragment } from 'react';
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
            </Routes>
          </Container>
        </main>
      </Router>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
