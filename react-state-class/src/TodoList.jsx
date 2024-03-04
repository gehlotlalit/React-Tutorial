import { useState } from "react";
export default function TodoList(){
    let [todos, setTodos] = useState(["sample Task"]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () =>{
        console.log("we have to add new task in todo");
    }
    return (
    <div>
        <input className="box" placeholder="add a task" value={newTodo}></input>
        <button onClick={addNewTask}  className="button">Add Task</button>
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

 
