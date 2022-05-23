import React from 'react'

export const TodoItem = (todo) => {
  console.log(todo)
  return (
    <div>
      <h4>{todo.todo.title}</h4>
        {/* <ul>
           {
            todo.todo.map((item, index) => {
               return (
                 <>
                 <li key={index}>Title: {item.title}</li>
                 <li key={index}>Description: {item.desc}</li>
                 <li key={index}>Serial No:{item.sno}</li>
                 </>
               )
             })
           }
         </ul> */}

    </div>
  )
}

