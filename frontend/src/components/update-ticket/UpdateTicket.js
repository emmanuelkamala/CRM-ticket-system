import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function UpdateTicket({ msg, handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label><span className='fw-bold'>Reply</span></Form.Label><br />
      <Form.Text>Please reply or update your ticket here</Form.Text>
      <Form.Control 
        as="textarea"
        rows="5"
        name="description"
        value={msg}
        onChange={handleChange}
      />

      <div className='text-end mt-3'>
        <Button variant="success" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  )
}

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default UpdateTicket;
