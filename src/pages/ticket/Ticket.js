import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistory from '../../components/message-history/MessageHistory';
import UpdateTicket from '../../components/update-ticket/UpdateTicket';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Ticket() {
  const {id} = useParams();

  const [message, setMessage] = useState('');
  const [ticket, setTicket] = useState('');

  useEffect(() => {
    for(let i=0; i < tickets.length; i++) {
      if(tickets[i].id == id) {
        setTicket(tickets[i])
        continue
      }
    }
  }, [id, message]);

  const handleChange = e => {
    setMessage(e.target.value);
  }

  const handleSubmit = () => {
    alert('Form Submitted');
  }
  return (
    <Container style={{ width: '60rem', margin: '0 auto'}}>
      <Row className='mt-3'>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      
      <Row>
        <Col className='text-secondary'>
          <div className='subject'><span className='fw-bold'>Subject :</span> {ticket.subject}</div>
          <div className='date'><span className='fw-bold'>Added At : </span>{ticket.addedAt}</div>
          <div className='status'><span className='fw-bold'>Status : </span>{ticket.status}</div>
        </Col>
        <Col className='text-end'>
          <Button variant='outline-success'>Close ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
        {
          ticket.history && <MessageHistory msg={ticket.history} />
        }
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <UpdateTicket 
            msg={message} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket;
