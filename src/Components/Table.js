import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './Table.css';

function TableDisplay(props) {
  console.log('props: ', props);

  const rowItems = [];

  for (let i = 0; i < props.expenses.length; i++) {
    let expense = props.expenses[i];
    rowItems.push(
      <tr key={expense.id}>
        <td>{expense.amount}</td>
        <td>{expense.date}</td>
        <td>{expense.merchant}</td>
        <td>{expense.description}</td>
        <td>
          <Button
            className='btn btn-danger'
            onClick={(e) => props.removeExpense(expense.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }

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
        <tbody>{rowItems}</tbody>
      </Table>
    </div>
  );
}

export default TableDisplay;
