import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-tickets.json';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Container>
      <Row className='mt-3'>
        <Col>
          <PageBreadcrumb page='Dashboard' />
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-5 mb-2'>
          <Link to='/add-ticket'>
            <Button variant='success' style={{ fontSize: '2rem', padding: '10px 20px', color: 'white'}}>Add New Ticket</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className='mt-2'>
          Recently Added Tickets
         
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className='recent-ticket'>
          <TicketTable tickets={tickets} />
         
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;