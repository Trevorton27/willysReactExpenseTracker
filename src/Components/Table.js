import React from 'react';
import Table from 'react-bootstrap/Table';
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
          <button
            className='btn btn-danger'
            onClick={(e) => props.handleDelete(expense.id)}
          >
            Delete
          </button>
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
