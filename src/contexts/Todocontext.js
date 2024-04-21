import { createContext,useContext } from "react";

export const TodoConetxt = createContext({
    todos: [
        {
            id:1,
            todo:"Todo msg",
            checked:false
        }
    ],
    addtodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo: (id)=>{},
    togglecomplete : (id)=>{}
})


export const TodoProvider = TodoConetxt.Provider

export  const useTodo=()=> {
    return  useContext(TodoConetxt)

}