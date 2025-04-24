import React, { useState, useEffect } from 'react'
import { createRecord, getRecords, updateRecord, deleteRecord } from '../../database/supabase'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Fetch todos on component mount
    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            setLoading(true)
            const { data, error } = await getRecords('todos', {
                orderBy: { column: 'created_at', ascending: false }
            })

            if (error) throw error
            setTodos(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleAddTodo = async (e) => {
        e.preventDefault()
        if (!newTodo.trim()) return

        try {
            const { data, error } = await createRecord('todos', {
                title: newTodo,
                completed: false,
                user_id: 'your-user-id' // Replace with actual user ID from auth context
            })

            if (error) throw error
            setTodos([data[0], ...todos])
            setNewTodo('')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleToggleTodo = async (id, completed) => {
        try {
            const { data, error } = await updateRecord('todos', id, {
                completed: !completed
            })

            if (error) throw error
            setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, completed: !completed } : todo
            ))
        } catch (error) {
            setError(error.message)
        }
    }

    const handleDeleteTodo = async (id) => {
        try {
            const { error } = await deleteRecord('todos', id)
            if (error) throw error
            setTodos(todos.filter(todo => todo.id !== id))
        } catch (error) {
            setError(error.message)
        }
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>

            <form onSubmit={handleAddTodo} className="mb-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new todo"
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B62A]"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#D2B62A] text-white rounded-lg hover:bg-[#FCD724] focus:outline-none focus:ring-2 focus:ring-[#D2B62A]"
                    >
                        Add
                    </button>
                </div>
            </form>

            <ul className="space-y-2">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleTodo(todo.id, todo.completed)}
                                className="h-4 w-4 text-[#D2B62A] focus:ring-[#D2B62A]"
                            />
                            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                                {todo.title}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList 