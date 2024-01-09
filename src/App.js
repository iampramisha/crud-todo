import './App.css';
import Header from './components.js/header';
import Form from './components.js/Form';
import { useEffect, useState } from 'react';
import Todolist from './components.js/Todolist';

const App= () =>{
  const InitialState= JSON.parse(localStorage.getItem("todos"))||[];
  const[input,setInput]=useState("");
  const [todos,setTodos]=useState(InitialState);
  const[editTodo,setEditTodo]=useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
        <Header></Header>
        </div>
        <div>
        <Form
        input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}
        ></Form>
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos}editTodo={editTodo} setEditTodo={setEditTodo}></Todolist>
        </div>
        </div>
    </div>
  );
}

export default App;
