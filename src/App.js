import './App.css';
import Inputs from './Components/Inputs';
import TableDisplay from './Components/TableDisplay';
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
    const newExpense = {
      id: Math.random(),
      amount: this.state.amount,
      date: this.state.date,
      merchant: this.state.merchant,
      description: this.state.description
    };
    if (this.state.expenses > 0) {
      this.setState(
        {
          expenses: [...this.state.expenses, newExpense],
          amount: '',
          date: '',
          merchant: '',
          description: ''
        },
        () => {
          localStorage.setItem(
            'expensesArray',
            JSON.stringify(this.state.expenses)
          );
        }
      );
    } else {
      this.setState(
        {
          expenses: [newExpense],
          amount: '',
          date: '',
          merchant: '',
          description: ''
        },
        () => {
          localStorage.setItem(
            'expensesArray',
            JSON.stringify(this.state.expenses)
          );
        }
      );
    }
  }

  removeExpense(id) {
    const expenses = this.state.expenses.filter((expense) => expense.id !== id);
    this.setState(
      {
        expenses: expenses
      },
      () => {
        localStorage.setItem(
          'expensesArray',
          JSON.stringify(this.state.expenses)
        );
      }
    );
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
          <TableDisplay
            expenses={this.state.expenses}
            removeExpense={this.removeExpense}
          />
        </Container>
      </Fragment>
    );
  }
}

export default App;
