import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TicketTable({tickets}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ticket Number</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {
          tickets.length ?  (tickets.map((row, i) => 
            <tr key={i}>
              <td>{row.id}</td>
              <td>
                <Link to='/ticket/:id'>
                  {row.subject}
                </Link>
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          )) : 
          (
            <tr>
              <td colSpan='4' className='text-center'>No ticket(s) available</td>
            </tr>
          )
        }
        
      </tbody>
    </Table>
  )
}

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
}

export default TicketTable;
