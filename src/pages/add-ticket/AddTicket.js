import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const initialFormData = {
  subject: '',
  issuedDate: '',
  description: '',
}

function AddTicket() {
  const [formData, setFormData] = useState(initialFormData);
  useEffect(()=> {}, [formData]);
  
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values');
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='New Ticket' />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            formData={formData}
          />
        </Col>
      </Row>
      
    </Container>
  )
}

AddTicket.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
}

export default AddTicket
