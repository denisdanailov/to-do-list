import React from "react";
import './Todo.css';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
const Todo = ( { text, todo,  todos, setTodos }) => {

    const deleteHandler = () => {
            setTodos(todos.filter((el) => el.id !== todo.id ));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed, text: 'check'
                };
            }
            
            return item; 
        }));
       
    };

    return(
        <div className="todo">
            <ul>
            <li className="todo-item">- {text} </li>
            <CheckIcon onClick={completeHandler} className="complete-btn" fontSize="medium">complete</CheckIcon>
            <ClearIcon onClick={deleteHandler} className="trash-btn" fontSize="medium"></ClearIcon>
            </ul>
        </div>
    );
}

export default Todo;