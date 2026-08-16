import { useState } from 'react'
import {v4 as uuidv4 } from 'uuid'
import './TodoList.css'

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("")

    let addNewTask =()=>{
          setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
          });
          setNewTodo("");
    };

    let updateNewTodo = (event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
    };

    let markAllDone = ()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return {...todo, isDone: true};
        }));
    };

    let markAsDone = (id)=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            if(todo.id == id){
                return {...todo, 
                    // task:todo.task.toUpperCase(),
                    isDone: true};
            }
            else{
                return todo;
            }
            // return todo;
        }));
    };

  return (
    <div className="todo-container">

        <h2>To Do App</h2>
        <div className="add_task">
            <input type="text" placeholder="Add a task" value={newTodo} onChange={updateNewTodo}/>
             <br/>
            <button onClick={addNewTask}>Add Task</button>
        </div>
       
        <br/>
        {/* <br /><br /><br /><br /> */}

        {/* <hr/> */}
        <h4>Tasks to do</h4>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={todo.isDone ?{ textDecorationLine:'line-through' }: {}}>{" "}
                        {todo.task}
                    </span>
                    {/* &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; */}
                    {/* {todo.task} - {todo.isDone ? 'Done' : 'Pending'} */}
            <div className="list-buttons">
                    <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                    {/* &nbsp; &nbsp; &nbsp;&nbsp; */}
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
        <br />
        <button onClick={markAllDone}>Mark All as Done</button>
    </div>
  )
}
