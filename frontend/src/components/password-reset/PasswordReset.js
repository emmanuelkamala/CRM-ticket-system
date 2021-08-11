import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PasswordReset = ({handleChange, email, handleResetSubmit, formSwitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-success text-center mt-5'>Reset Password</h1>
          <hr/>
          <Form className="p-3" autoComplete="off" onSubmit={handleResetSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                placeholder="Enter email" 
                value={email} 
                onChange={handleChange} 
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Reset Password
            </Button>
          </Form>
          <hr/>
        </Col>
      </Row> 
      <Row className="mb-5">
        <Col>
          <Link 
            to='#!' 
            onClick={() => formSwitcher('login')} 
            className='link-success text-decoration-none'
          >
            Login Now?
          </Link>
        </Col>
      </Row>
    </Container>
    
  )
}

PasswordReset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}

export default PasswordReset;
