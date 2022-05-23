
import "./App.css";
import Header from "./MyComponents/Header";
import {Todos}  from "./MyComponents/Todos";
import {Footer}  from "./MyComponents/Footer";

function App() {
   const onDelete = (todo) =>{
     console.log("i m on delete", todo);
   }

  let todos = [
    {
      sno:1,
      title:"Go to the market",
      desc:"you need to  go to the market to  get this job done"
    },
    {
      sno:2,
      title:"Go to school",
      desc:"you need to  go to the market to  get this job done2"
    },
    {
      sno:3,
      title:"Go to university",
      desc:"you need to  go to the market to  get this job done3"
    }
  ]
  return (
    <>
     <Header title="My Todo List" searchBar={true}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
