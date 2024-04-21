import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/Todocontext'

const TodoFrom = () => {

    const [todo,setTodo]=useState("")

    const {addtodo} = useTodo()

    const add =(e)=>{
        e.preventDefault()

        if (!todo) return 
        addtodo({todo:todo,completed:false})
        setTodo("")
    }

  return (
    <form className='flex' onSubmit={add}>
        <input type="text"
        placeholder='Write Todo....' 
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
        className="w-96 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white"/>
        <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0' >Add</button>
    </form>
  )
}

export default TodoFrom
