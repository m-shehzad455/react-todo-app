import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  // console.log(props.todos[0].title)
  return (
    <div className='container'>
         <h3>Todos lists</h3>
         {/* {props.todos} */}
         <TodoItem todo={props.todos[1]}/>
    </div>
  )
}

