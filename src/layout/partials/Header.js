import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/crm-logo.png';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  const history = useHistory();

  const logout = () => {
    history.push('/');
  }
  return (
    <Navbar collapseOnSelect variant='dark' bg='success' expand='md' >
      <Navbar.Brand>
        <img src={logo} alt='my logo' width='50px' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <LinkContainer to='/dashboard'>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/tickets'>
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
