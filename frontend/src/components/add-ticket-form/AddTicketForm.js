import React from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import './add-ticket-form.css';

function AddTicketForm({handleSubmit, handleChange, formData }) {
  return (
    <Card style={{width: '50rem'}} className="mt-5 mb-10 add-ticket-form">
      <h1 className="text-success text-center mt-3">Add New Ticket</h1>
      <hr />
      <Form className="p-3" autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>Subject</Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="type" 
                  name="subject"
                  minLength="6"
                  placeholder="Enter your subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm={3}>Issued Found at:</Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="date" 
                  name="issuedDate"
                  value={formData.issuedDate}
                  onChange={handleChange} 
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                name="description"
                value={formData.description}
                rows="6"
                onChange={handleChange} 
                required
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="success" type="submit" size="lg">
                Add a New Ticket
              </Button>
            </div>
          </Form>
    </Card>
  )
}

export default AddTicketForm;
