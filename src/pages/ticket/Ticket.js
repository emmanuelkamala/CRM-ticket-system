import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/data/dummy-tickets.json';

const ticket = tickets[0];

function Ticket() {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className='text-weight-bolder text-secondary'>
          <div className='subject'>Subject : {ticket.subject}</div>
          <div className='date'>Added At : {ticket.addedAt}</div>
          <div className='status'>Status : {ticket.status}</div>
        </Col>
        <Col className='text-right'>
          <Button variant='outline-success'>Close ticket</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket;
