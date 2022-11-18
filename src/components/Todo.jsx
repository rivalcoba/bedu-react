import '../css/todo.css'
import React, { useState } from 'react';
function Todo() {
  // Creando un Hook useState
  const [done, setDone] = useState(false);
  return (
    <div className="list-item">
      Tarea
      <button className="delete is-pulled-right" />
    </div>
  )
}
export default Todo;