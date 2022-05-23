import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  // console.log(props.todos[0].title)
  return (
    <div className='container'>
         <h3 className='text-center my-3'>Todos lists</h3>

         {props.todos.map((todo) => {
             return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
         })}
        
    </div>
  )
}

