import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/crm-logo.png';

function Header() {
  return (
    <Navbar collapseOnSelect variant='dark' bg='info' expand='md'>
      <Navbar.Brand>
        <img src={logo} alt='my logo' width='50px' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/tickets'>Tickets</Nav.Link>
          <Nav.Link href='#'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
