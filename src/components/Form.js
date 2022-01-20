import React from "react";
import { Button, TextField } from "@mui/material";



const Form = ({ setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    return(

        <form>
            <TextField 
            onChange={inputTextHandler} 
            value={inputText}
            id="todo-input" 
            label="things" 
            variant="outlined" />
            <Button onClick={submitTodoHandler} >Click</Button>
                
        </form>
    );
}

export default Form;