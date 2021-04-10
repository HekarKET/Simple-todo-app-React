import '../App.css';
const InputMethods = ({ todo, setTodo, inputText, setinputText, setStatus }) => {


    const addTodo = (e) => {
        e.preventDefault();
        setTodo([...todo, { text: inputText, completed: false, id: Math.random() }]);
        setinputText(" ");

    }

    const setInputText = (e) => {
        setinputText(e.target.value);
    }

    const statusChanger = (e) => {

        setStatus(e.target.value);

    }

    return (
        <div>

            <form>

                <input value={inputText} type='text' onChange={setInputText}></input>
                <button onClick={addTodo}><i className='fas fa-plus-square'></i></button>
                <div className='select'>
                    <select onChange={statusChanger}>
                        <option> All </option>
                        <option> Completed </option>
                        <option> Incomplete </option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default InputMethods;