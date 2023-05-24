import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo]=useState("");
  const [todos, setTodos]=useState([]);
  const [editId, setEditId]=useState(0);


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(todo!==''){
      setTodos([{id:`${todo}-${Date.now()}` , todo},...todos])
    }
    setTodo("");
  }
  const handleDelete=(id)=>{
    const delTodo=todos.filter((to)=>to.id!==id);
    setTodos([...delTodo])
  }


  const handleEdit=(id)=>{
    const editTodo=todos.find((i)=>i.id===id);
    setTodo(editTodo.todo);
    setEditId(id);
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo List App</h1>
        <form className='todoform' onSubmit={handleSubmit}>
          <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value) }/>
          <button type='submit'>{editId?"Edit":"Go"}</button>
        </form>
        <ul className='alltodos'>
          {
            todos.map((t)=>(
              <li className='singleToDo'>
                
                <span className='todoText' key={t.id}>{t.todo}</span>
                <button onClick={()=>handleDelete(t.id)}>Delete</button>
                <button onClick={()=>handleEdit(t.id)}>Edit</button>
              </li>
            ))
          }

          
        </ul>
      </div>
    </div>
  );
}

export default App;
