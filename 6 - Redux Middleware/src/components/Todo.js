import React, { PropTypes } from 'react'
import './Todo.css';

const Todo = ({ onToggle, onRemove, completed, title }) => {
  const key = title.replace(/[^\w\s]/gi, '')
  return (
    <li>
      <div className="checkBox">
      	<input type="checkbox" id={key} checked={completed} onChange={onToggle} />
      	<label htmlFor={key}></label>
      </div>
      <span style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>{title}</span> <a className="remove" onClick={onRemove}>✘</a>
    </li>
  );
}

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo
