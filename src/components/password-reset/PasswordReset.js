import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PasswordReset = ({handleChange, email, handleSubmit, formSwitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center mt-5'>Reset Password</h1>
          <hr/>
          <Form className="p-3" autoComplete="off" onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <hr/>
        </Col>
      </Row> 
      <Row className="mb-5">
        <Col>
          <a href='#!' onClick={() => formSwitcher('login')}>Login Now?</a>
        </Col>
      </Row>
    </Container>
    
  )
}

PasswordReset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}

export default PasswordReset;
