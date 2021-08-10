import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistory from '../../components/message-history/MessageHistory';
import UpdateTicket from '../../components/update-ticket/UpdateTicket';
import { useState } from 'react';

const ticket = tickets[0];

function Ticket() {
  const [message, setMessage] = useState('');
  return (
    <Container style={{ width: '60rem', margin: '0 auto'}}>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className='font-weight-bolder text-secondary'>
          <div className='subject'>Subject : {ticket.subject}</div>
          <div className='date'>Added At : {ticket.addedAt}</div>
          <div className='status'>Status : {ticket.status}</div>
        </Col>
        <Col className='text-end'>
          <Button variant='outline-success'>Close ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <UpdateTicket msg={message} />
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket;
