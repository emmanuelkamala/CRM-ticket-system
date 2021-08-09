import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-tickets.json';

function TicketLists() {
  const [str, setStr] = useState('');
  const [dispTicket, setDispTicket] = useState(tickets);
  useEffect(()=> {}, [str, dispTicket]);

  const handleChange = e => {
    const {value} = e.target;
    setStr(value);
    searchTicket(value);
  }

  const searchTicket = sttr => {
    const displayTicket = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase()));
    setDispTicket(displayTicket);
  }
  return (
    <Container>
      <Row className='mt-4'>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Button variant='success'>Add New Ticket</Button>
        </Col>
        <Col className='text-right'>
          <SearchForm handleChange={handleChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  )
}

export default TicketLists;
