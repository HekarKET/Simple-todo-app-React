import React from "react";



const Todo = ({ text, todo, todos, setTodo }) => {

    const deletTodo = (e) => {
        console.log(todo);
        setTodo(todos.filter((t) => t.id !== todo.id));
    }


    const changeCheck = () => {
        setTodo(todos.map((t) => {
            if (t.id === todo.id) {
                t.completed = !t.completed;
                return t;
            }
            return t;
        }));
    }


    return (



        <div className={`todo ${todo.completed ? "completed" : " "}`}>

            <li>{text}</li>
            <button className='checkbtn' onClick={changeCheck}> <i className='fa fa-check' /></button>
            <button className='deltebtn' onClick={deletTodo}><i className='fa fa-trash'></i></button>

        </div>
    );
}

export default Todo;