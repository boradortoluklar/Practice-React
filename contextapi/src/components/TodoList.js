import React, {useContext, useState} from 'react';
import {ThemeContext} from '../Contexts/ThemeContext';
import { TodoListContext } from '../Contexts/TodoListContext';

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const { todos, dispatch} = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = e => {
        setTodo(e.target.value);
    };
    const handleForSubmit = e => {
        e.preventDefault();
        dispatch( {type: 'ADD_TODO', text: todo} );
    };
    const handleRemoveTodo = e => {
        const id =e.target.id;
        dispatch({ type: 'REMOVE_TODO', id});
    }
    return(
        <div style={{ background: theme.background, color: theme.text, textAlign:'center' }}>
            {
                todos.length ? (
                    todos.map(todo => {
                        return <p key={todo.id} id={todo.id} onClick={handleRemoveTodo} className='item'>{todo.text}</p>
                    })
                ) : (
                    <div>You have no todos</div>
                )
            }
            <form onSubmit={handleForSubmit}>
                <label htmlFor='todo'>Add Todo:</label>
                <input type='text' id='todo' onChange={handleChange}/>
                <input className='ui button primary' type='submit' value='Add new todo' style={{marginRight:'4px'}}/>
                <button className='ui button primary' onClick ={changeTheme}>Switch Theme</button>

            </form>
        </div>
    )
};
export default TodoList;    