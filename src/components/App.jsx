import React, { useState }  from 'react';
import Header from './Header'
import Form from './Form'
import TodoList from './TodoList'

function App() {
  // estado de la app
  const [todos, setTodos] = useState([]);
  return (
    <div className="wrapper">
      <div className="card frame">
        <Header />
        <TodoList tasks={todos}/>
        <Form />
      </div>
    </div>
  )
}

export default App
