import logo from './logo.svg';
import './App.css';
import Inputs from './Components/Inputs';
import TableDisplay from './Components/Table';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: JSON.parse(localStorage.getItem('expensesArray')) || [],
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
    const storage = JSON.parse(localStorage.getItem('expensesArray'));
    console.log(storage);
    if (storage !== null) {
      this.setState({ expenses: storage });
    }
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

    localStorage.setItem('expensesArray', JSON.stringify(newExpense));

    this.setState({
      expenses:
        this.state.expenses.length >= 1
          ? [...this.state.expenses, newExpense]
          : [newExpense],
      amount: '',
      date: '',
      merchant: '',
      description: ''
    });
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
      <div>
        <Inputs addExpense={this.addExpense} handleChange={this.handleChange} />
        <TableDisplay
          expenses={this.state.expenses}
          removeExpense={this.removeExpense}
        />
      </div>
    );
  }
}

export default App;
