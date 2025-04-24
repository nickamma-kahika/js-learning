import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoslice'


function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    console.log(todos)

    const [editText, setEditText] = useState('')
    const [editId, setEditId] = useState(null)  

    const startEdit = (todo)=>{
      setEditId(todo.id)
      setEditText(todo.text);
    }

    const saveEdit = (e)=>{
      e.preventDefault()
      dispatch(updateTodo({id: editId, text: editText}))
      setEditId(null)
      setEditText('')
    }
    

    return (

        <>

    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input 
              type='text'
              className='bg-gray-700 text-white rounded px-2 py-1'
              value={editText}
              onChange={(e)=> setEditText(e.target.value)}
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            

            <div className=''>
            {editId === todo.id ? (
              <button 
              className= 'text-white bg-green-500 border-0 py-1 px-4 m-1 focus:outline-none hover:bg-green-600 rounded text-mdv'
              onClick={saveEdit}
              >
              Save
              </button>
            ) : (
              <button 
            className= 'text-white bg-yellow-500 border-0 py-1 px-4 m-1 focus:outline-none hover:bg-yellow-600 rounded text-mdv'
            onClick={()=>startEdit(todo)}
            >
            Update
            </button>
            )}

            
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
        </>
    )
}

export default Todo