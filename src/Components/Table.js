import React from 'react';
import Row from './Row';
import Table from 'react-bootstrap/Table';
import './Table.css';

function TableComp(props) {
  //   let count = -1;

  //   const rowItems = props.expenses.map((expense) => {
  //     count = count + 1;
  //     return (
  //       <Row
  //         index={count}
  //         key={count}
  //         amount={expense[0]}
  //         date={expense[1]}
  //         merchant={expense[2]}
  //         description={expense[3]}
  //         removeExpense={props.removeExpense}
  //       />
  //     );
  //   });

  const rows = [];

  const displayRows = rows.map((expense) => (
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

export default TableComp;
