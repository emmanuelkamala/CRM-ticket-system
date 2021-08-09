import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-tickets.json';

function TicketLists() {
  const [str, setStr] = useState('');
  useEffect(()=> {}, [str]);

  const handleChange = e => {
    setStr(e.target.value);
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
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  )
}

export default TicketLists;
