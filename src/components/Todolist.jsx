import '../App.css';

import Todo from './Todo'


const Todolist = ({ todo, setTodo, filteredTodo }) => {
    return (
        <ul className='todo-list'>
            {filteredTodo.map((t) => (
                <Todo

                    key={t.id}
                    text={t.text}
                    todo={t}
                    todos={todo}
                    setTodo={setTodo}


                />

            ))}
        </ul>
    );
}

export default Todolist;