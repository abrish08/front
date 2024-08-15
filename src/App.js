
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Product from './Components/Product';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
function App() {
  return (
    <Router>
      <header	 >
        <Navbar bg='dark' variant='dark' position='fixed'>
          <Container>
            <LinkContainer to='/'> 
            <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            </Container>
        </Navbar>
       </header>
       <main>
        <Container>
      <Routes>
        <Route path='/product/:Name' element={<Product/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
  
       <Route path='/registration' element={<Registration/>}/>
      </Routes>
      </Container>
      </main>
      <footer >

     <Row  >
      <Col>
      <p>
        About
      </p>
      </Col >
      <Col>
      <p>Conact</p>
      </Col>
      <Col>
      <p>Developer</p>
      </Col>
      <p>all rights are reserved</p>

      </Row>
    </footer>
    </Router>
  );
}

export default App;
