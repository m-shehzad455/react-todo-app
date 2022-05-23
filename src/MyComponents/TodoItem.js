import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  console.log(todo)
  return (
    <div>
      <h4>{todo.todo.title}</h4>
      <p>{todo.todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}}>Delete</button>

    </div>
  )
}

