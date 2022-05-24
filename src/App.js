import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";
// import { About } from "./MyComponents/About";
// import { Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.getItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("i am adding addtodo", title, desc);

    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodos]);
    console.log(myTodos);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Header title="My Todo List" searchBar={true}/>
    <AddTodo  addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    
    {/* <Routes>
      <Route path="/about" element={<About/>}/>
    </Routes> */}
    <Footer/>
    </>
    
  );
}

export default App;
