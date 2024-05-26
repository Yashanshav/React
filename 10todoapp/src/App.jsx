import { useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => todo.id === id? updatedTodo : todo))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.filter((todo) => {
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    }))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{todos, addTodo, removeTodo, updateTodo, toggleComplete}}>
      <h1 className="bg-red-500">To Do App</h1>
    </TodoContextProvider>
    
  )
}

export default App
