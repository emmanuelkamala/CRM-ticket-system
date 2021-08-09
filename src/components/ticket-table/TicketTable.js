import React from 'react';
import { Table } from 'react-bootstrap';

function TicketTable() {
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
        <tr>
          <td>1</td>
          <td>Email issue</td>
          <td>Client response pending</td>
          <td>2021-08-08</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TicketTable;
