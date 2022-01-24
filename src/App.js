import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
 
  return (
    <div className="root">
    <header className="header">
      <h1>TO-DO LIST</h1>
     
      <div className="input-section">
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}  
      />
      </div>
      </header>
      <div className="item-section">
      <TodoList
       setTodos={setTodos} 
       todos={todos}
     />
      </div>
      
      <footer className="footer"></footer>
    </div>
    
    
  );
}

export default App;
