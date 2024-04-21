import TodoFrom from "./Components/TodoFrom";
import TodoItem from "./Components/TodoItem";
import { TodoProvider } from "./contexts/Todocontext";
import { useState,useEffect } from "react";

function App() {
  const [todos,setTodos]=useState([])
  const addtodo =(todo)=>{
    setTodos((prevtodo)=>[{id:Date.now() ,...todo},...prevtodo])
  }
  
  const updateTodo= (id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
  }
const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id!==id)))
}

const togglecomplete = (id)=>{
  setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?{...prevtodo,checked:!prevtodo.checked}:prevtodo)))
}

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length>0){
    setTodos(todos)
  }
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))

},[todos])
  

  return (
    <TodoProvider value={{todos,togglecomplete,updateTodo,deleteTodo,addtodo}}>
    <div className="bg-blue-950 h-screen py-9 px-6">
      <div className=" border px-6  py-4 flex flex-col  items-center ">
        <h2 className="text-3xl font-semibold text-white mb-4 mt-2">Manage Your Todos</h2>
        <div className="mb-3 ">
          <TodoFrom/>
        </div>
        <div>
          {todos.map((todo)=>(
            <div key={todo.id} className=" mb-2">
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
       </div>
     </TodoProvider>
  );
}

export default App;
