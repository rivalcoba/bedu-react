import '../css/todo.css'
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  // Creando un Hook useState
  // const [done, setDone] = useState(false);
  return (
    <div className={`list-item ${props.done ? 'done':''}`} >
      Tarea
      <button className="delete is-pulled-right" />
    </div>
  )
}

export default Todo;