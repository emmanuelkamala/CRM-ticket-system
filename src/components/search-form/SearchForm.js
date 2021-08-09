import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SearchForm({handleChange, str}) {
  console.log(str);
  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm='2'>
          Search: {' '}
        </Form.Label>
        <Col sm='9'>
          <Form.Control 
            type='text'
            value={str}
            onChange={handleChange}
            name='searchString'
            placeholder='Search ticket...'
          />
        </Col>
      </Form.Group> 
    </div>
  )
}

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
}

export default SearchForm;
