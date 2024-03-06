import { useState } from "react";
export default function TodoList(){
    let [todos, setTodos] = useState(["sample Task"]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () =>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };
    let updateTodoValue  = (event) => {
        setNewTodo(event.target.value);
    };
    
    return (
    <div>
        <input className="box" placeholder="add a task"
        value={newTodo}
         onChange={updateTodoValue}
         ></input>
        <button onClick={addNewTask }  className="button">Add Task</button>
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>
        <h4>Task ToDo</h4>
        <ul>
            {
                todos.map((todo) => (
                    <li>{todo}</li>
                ))}
        </ul>
    </div>
    );
}

 
