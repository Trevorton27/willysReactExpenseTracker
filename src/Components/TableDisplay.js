import React, { Button } from 'react';
import Table from 'react-bootstrap/Table';
import './TableDisplay.css';

function TableDisplay(props) {
  console.log('props: ', props);
  const displayRows = props.expenses.map((expense) => (
    <tr key={expense.id}>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
      <td>{expense.merchant}</td>
      <td>{expense.description}</td>
      <td>
        <Button className='btn btn-danger' onClick={props.removeExpense}>
          X
        </Button>
      </td>
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
