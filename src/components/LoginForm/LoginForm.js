import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center mt-5'>Client Login</h1>
          <hr/>
          <Form className="p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
          <a href='#!'>Forgot Password?</a>
        </Col>
      </Row>
    </Container>
    
  )
}

export default LoginForm;
