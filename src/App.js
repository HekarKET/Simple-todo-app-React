import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/InputMethods'
import TodoList from './components/Todolist'

function App() {



  const [todo, setTodo] = useState([]);
  const [inputText, setinputText] = useState('');
  const [status, setStatus] = useState('All');
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => { GetTodos(); }, []);

  useEffect(() => {
    const changeFilteTodo = () => {

      switch (status) {
        case 'All': setFilteredTodo(todo);
          break;
        case 'Completed': setFilteredTodo(todo.filter((t) => t.completed === true));
          break;
        case 'Incomplete': setFilteredTodo(todo.filter((t) => t.completed === false));
          break
        default: console.log(status);
      }
    }
    const SaveTodoToLocal = () => {
      localStorage.setItem('todos', JSON.stringify(todo));
    }
    changeFilteTodo();
    SaveTodoToLocal();
  },
    [todo, status]);






  const GetTodos = () => {

    if (localStorage.getItem('todos') == null) {
      setTodo([]);
    }
    else {
      const todo = JSON.parse(localStorage.getItem('todos'));
      setTodo(todo);
    }

  }






  return (
    <div>
      <header>
        Todo App
      </header>
      <Form
        todo={todo}
        setTodo={setTodo}
        inputText={inputText}
        setinputText={setinputText}
        setStatus={setStatus}



      />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        filteredTodo={filteredTodo}
      />

    </div>
  );
}

export default App;
