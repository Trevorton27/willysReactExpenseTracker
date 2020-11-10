import './App.css';
import Inputs from './Components/Inputs';
import TableComp from './Components/Table';
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: [],
      amount: '',
      date: '',
      merchant: '',
      description: ''
    };
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let storage = JSON.parse(localStorage.getItem('expensesArray'));
    console.log(storage);
    this.setState({
      expenses: storage
    });
  }

  addExpense(e) {
    e.preventDefault();

    this.setState((prevState) => {
      //add to the array without mutating the state
      let newExpense = [
        this.state.amount,
        this.state.date,
        this.state.merchant,
        this.state.description
      ];

      localStorage.setItem('expensesArray', JSON.stringify([newExpense]));
      return {
        expenses: [...prevState.expenses, newExpense]
      };
    });
  }

  removeExpense(key) {
    this.setState((prevState) => {
      let expenses = [...prevState.expenses];
      expenses.splice(key, 1);
      localStorage.setItem('expensesArray', JSON.stringify(expenses));
      return {
        expenses: expenses
      };
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Inputs
            expenses={this.state.expenses}
            addExpense={this.addExpense}
            handleChange={this.handleChange}
          />
          <TableComp
            expenses={this.state.expenses}
            removeExpense={this.removeExpense}
          />
        </Container>
      </Fragment>
    );
  }
}

export default App;
