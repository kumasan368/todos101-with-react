import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem
 extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      margin: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      "line-through" : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    // You can use javascript with usign {}
    return (
      <div style={ this.getStyle() }>
        <h3>
          <input
            type="checkbox"
            onChange={ this.props.markComplete.bind(this, id) }
          />
          {" "}
          { title }
          <button
          onClick={this.props.deleteTodo.bind(this, id)}
          style={btnStyle}>X</button>
        </h3>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired
}

const btnStyle = {
  backgroundColor: '#ff0000',
  color: 'white',
  border: 'none',
  marginTop: '2px',
  padding: '5px 10px',
  borderRadius: '30%',
  float: 'right'
}

export default TodoItem;










