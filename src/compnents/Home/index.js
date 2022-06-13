import React, {useState , useEffect}  from "react";
import {TextField} from "@mui/material";
import "bootstrap/dist/css/bootstrap.css"; 

const Index=()=>{
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  
  
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function fnHandleTask(e) {
    setTodo(e.target.value);
  }
   const fnAddTask=(e)=>{
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo("");
   }
  //  const fnUpdateTask=(id)=>{
  //    const updateItem= todos.filter((todo)=>{})
  //    setUpdate(updateItem);
     
  //  }
   
   const fnDeleteTask=(id)=>{
    const removeItem = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(removeItem);
   }
  
  return (
    <div className='container text-center'>
      <h1 className="mb-5">To-Do App!</h1>
      <TextField id="filled-basic" label="Please Enter New Task" variant="filled" className="me-5 mb-5" onChange={fnHandleTask} value={todo}/>
      <button className="btn btn-primary mt-3 mb-5" onClick={fnAddTask}>Add Task</button>
      <div className="row">
      
        <table border="2px solid red">
          <tr>
            <td>Select</td>
            <td>Task</td>
            <td>Action</td>
          </tr>
        {todos.map((todo) => (
            <tr>
            <td><input type="checkbox" /></td>
            <td className="ms-5" key={todo.id} >{todo.text}</td>
            <td><button className="btn btn-primary me-3 mb-2 ms-2 " >Update</button><button className="btn btn-danger mb-2" onClick={()=> fnDeleteTask(todo.id)}>Delete</button></td>
            </tr>      
        ))}
      </table>
      
      </div>

    </div>
  );
}

export default Index;
