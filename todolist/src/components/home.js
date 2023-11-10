// components/TodoList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../state/actions/action_index';

const Home = ({ todos, addTodo, toggleTodo, removeTodo }) => {
    const [newTodoText, setNewTodoText] = useState('');
    const [darktheme, setdarktheme] = useState('');

    const handleToggleTheme = () => {
        setdarktheme((prevTheme) => !prevTheme);
    };

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
            addTodo(newTodoText);
            setNewTodoText('');
        }
    };

    return (
        <>
            <div style={{ background: darktheme ? 'black' : 'white', color: darktheme ? 'white' : 'black' }}>
                <div className='d-flex'>
                    <h1>To Do List</h1>
                    <button onClick={handleToggleTheme} className='btn btn-primary ms-5' style={{ background: darktheme ? 'white' : 'inherit', color: darktheme ? 'black' : 'inherit' }}>
                        Toggle Theme
                    </button>
                </div>
                <div className='d-flex'>
                    <input className='form-control w-25'
                        type="text"
                        value={newTodoText}
                        onChange={(e) => setNewTodoText(e.target.value)}
                        placeholder="Enter a new todo"
                    />
                    <button className='btn btn-primary' onClick={handleAddTodo}>Add Todo</button>
                </div>
                <table>
                    {todos.map((todo) => (
                        <tr key={todo.id} className='d-flex border border-1'>
                            <td
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                onClick={() => toggleTodo(todo.id)}
                            className=' w-100 m-1 d-flex alignitem-center fw-bold me-5' >
                                {todo.text}
                            </td>
                            <td className='m-1'>
                                <button className='btn btn-danger' onClick={() => removeTodo(todo.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addTodo,
    toggleTodo,
    removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
