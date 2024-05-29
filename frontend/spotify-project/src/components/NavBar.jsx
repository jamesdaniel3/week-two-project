import React from 'react'
import '../styles/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {logout} from "../utils/Spotify.js";

const NavBar = () => {
  return (
    <>
        <Navbar className='navbar-dark' style={{padding:0}} expand={false} id='nav'>
          <Container style={{padding:0}}>
            <Navbar.Toggle className = 'toggle-btn' aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">discover</Nav.Link>
                    <Nav.Link href="/profile">profile</Nav.Link>
                    <Nav.Link href="/messages">messages</Nav.Link>
                    <Nav.Link href="/forums">forums</Nav.Link>
                    <Nav.Link href="/liked-songs">liked songs</Nav.Link>
                    <Nav.Link href="/top-artists">top artists</Nav.Link>
                    <Nav.Link href="/top-songs">top songs</Nav.Link>
                    <Nav.Link onClick={logout}>log out</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;