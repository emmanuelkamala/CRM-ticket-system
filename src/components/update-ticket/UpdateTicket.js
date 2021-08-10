import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function UpdateTicket({msg}) {
  return (
    <Form>
      <Form.Label>Reply</Form.Label><br />
      <Form.Text>Please reply or update your ticket here</Form.Text>
      <Form.Control 
        as="textarea"
        rows="5"
        name="description"
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
}

export default UpdateTicket;
