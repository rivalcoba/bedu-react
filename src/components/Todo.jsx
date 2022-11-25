import '../css/todo.css'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkmark from './Checkmark';

function Todo(props) {
  // Creando un Hook useState
  // const [done, setDone] = useState(false);
  return (
    <div className={`list-item ${props.done ? 'done':''}`} >
      Tarea
      <div className="is-pulled-right">
        <Checkmark done={props.done} />
        <button className="delete is-pulled-right" />
      </div>
    </div>
  )
}

Todo.propTypes = {
  done: PropTypes.bool,
}

export default Todo;