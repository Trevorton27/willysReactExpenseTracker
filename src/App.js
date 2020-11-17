import './App.css';
import Inputs from './Components/Inputs';
import TableDisplay from './Components/Table';
import React from 'react';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: []
    };

    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    localStorage.getItem('expenseArray') &&
      this.setState({
        expenses: JSON.parse(localStorage.getItem('expenseArray'))
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenses.length !== prevState.expenses.length) {
      localStorage.setItem('expenseArray', JSON.stringify(this.state.expenses));
    }

    console.log('expenses: ', this.state.expenses);
  }

  addExpense(event) {
    event.preventDefault();

    let newExpense = {
      id: Math.random(),
      amount: this.state.amount,
      date: this.state.date,
      merchant: this.state.merchant,
      description: this.state.description
    };

    this.setState({
      expenses: [...this.state.expenses, newExpense]
    });

    event.target.reset();
  }

  removeExpense(expenseID) {
    const expenses = this.state.expenses.filter(
      (expense) => expense.id !== expenseID
    );
    this.setState({ expenses: expenses });
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log('e.target: ', e.target.value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Container>
        <Inputs addExpense={this.addExpense} handleChange={this.handleChange} />
        <TableDisplay
          expenses={this.state.expenses}
          removeExpense={this.removeExpense}
        />
      </Container>
    );
  }
}

export default App;
