import '../css/todoList.css'
import Todo from './Todo'
import PropTypes from 'prop-types';

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {
        props.tasks.map((e, i) => 
          <Todo
            key={i}
            done={e.done}
            title={e.title} 
          />
        )
      }
    </div>
  )
}

TodoList.propTypes = {
  tasks: PropTypes.array
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;