import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // console.log(this.props.todos)
    // You can use javascript with usign {}
    return (
      this.props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          deleteTodo={this.props.deleteTodo}
          />
      ))
    );
  }

}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
