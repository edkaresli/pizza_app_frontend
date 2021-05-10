import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
  <Container>
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Text>
        Signed-in user
      </Navbar.Text>
    </Navbar>
  </Container>
  );
}

export default Nav;