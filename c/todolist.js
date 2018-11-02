const Todo = ({ deleteTodo, text }) => {
  return <li onClick={deleteTodo}>{text}</li>
}

export default ({ todos, dispatch }) => {
  const deleteTodo = id => dispatch({ type: 'DEL', id })
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={`todo_${todo.id}`} deleteTodo={() => deleteTodo(todo.id)} text={todo.text} />
      ))}
    </ul>
  )
}
