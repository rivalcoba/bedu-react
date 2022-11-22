import '../css/todoList.css'
import Todo from './Todo'

function TodoList() {
  return (
    <div className="list-wrapper">
      <Todo done/>
      <Todo />
      <Todo done/>
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
}
export default TodoList;