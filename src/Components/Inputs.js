import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Inputs.css';

const Inputs = (props) => {
  //   let expenseAdded = (e) => {
  //     e.preventDefault();

  //     props.expenses.addExpense(amount, date, merchant, description);
  //   };
  let clearStorage = () => {
    localStorage.clear();
  };
  return (
    <Form id='form' onSubmit={props.addExpense}>
      <div className='inputs-container'>
        <div className='form-group'>
          <label>Amount</label>
          <input
            className='form-control'
            id='number'
            step='0.1'
            type='number'
            name='amount'
            value={props.expenses.amount}
            onChange={props.handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Date</label>
          <input
            className='form-control'
            id='date'
            type='date'
            name='date'
            value={props.expenses.date}
            onChange={props.handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Merchant</label>
          <input
            className='form-control'
            id='merchant'
            type='text'
            name='merchant'
            value={props.expenses.merchant}
            onChange={props.handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Description</label>
          <input
            className='form-control'
            id='description'
            type='text'
            name='description'
            value={props.expenses.description}
            onChange={props.handleChange}
            required
          />
        </div>
        <div className=''>
          <Button id='submit' type='submit' className='submitButton'>
            Submit
          </Button>
          <Button
            onClick={clearStorage}
            className='btn btn-warning '
            id='submit'
          >
            Clear Memory
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Inputs;
