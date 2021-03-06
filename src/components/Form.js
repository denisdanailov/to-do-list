import React from "react";
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  
    inputConteiner: {
       display: 'flex',
       alignItems: 'center',
       marginBottom: '20px',
       
    },

    input: {
        background: 'grey',
        color: 'white',
        width: '300px',
        height: '40px',
        
        
        borderColor: 'white',
        border: '1px solid'
    },

    addBtn: {
        
        background: '#525252',
        color: 'white',
        fontSize: '1.1rem',
        marginLeft: '5px',
        cursor: 'pointer',
        borderStyle: 'solid',
        border: '1px',
        borderColor: 'white',
        
        padding: '10px 20px 10px 20px'
        

       
    }
   

});


const Form = ({ setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if (inputText.length == 0) {
            inputText = 'empty'
        }
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    const classes = useStyles();

    return (

        <form>
            <div className={classes.inputConteiner}>
                <input
                    className={classes.input}
                    onChange={inputTextHandler}
                    value={inputText}
                    placeholder="Type something..."
                    id="todo-input"
                    label="things"
                    variant="outlined" />
                <button 
                    variant="contained"
                    className={classes.addBtn}
                    onClick={submitTodoHandler}

                >Add</button>


            </div>
            



        </form>

    );
}

export default Form;