import React from 'react';
import Row from './Row';
import Table from 'react-bootstrap/Table';
import './TableDisplay.css';

function TableDisplay(props) {
  const row = [props.expenses];

  const displayRows = row.map((expense) => (
    <tr key={expense.id}>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
      <td>{expense.merchant}</td>
      <td>{expense.description}</td>
    </tr>
  ));

  return (
    <div className='table-container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Merchant</th>
            <th>Description </th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{displayRows}</tbody>
      </Table>
    </div>
  );
}

export default TableDisplay;
