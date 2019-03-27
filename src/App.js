import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Wash dishes',
        completed: false
      },
      {
        id: 3,
        title: 'Study Redux',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
      })
    });
  }

  // Delete Todo
  deleteTodo = (id) => {
    // console.log(id)
    this.setState({ todos: this.state.todos.filter(todo =>
      todo.id !== id,
      )
    });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    // console.log(this.state.todos)
    // You can use javascript with usign {}
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
















