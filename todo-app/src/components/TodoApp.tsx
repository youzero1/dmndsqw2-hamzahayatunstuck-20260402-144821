'use client'

import { useState, useCallback } from 'react'
import { Todo, FilterType, Priority } from '@/types/todo'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import TodoStats from './TodoStats'

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Build a Next.js Todo App',
      completed: true,
      priority: 'high',
      createdAt: new Date(),
    },
    {
      id: '2',
      text: 'Add Tailwind CSS styling',
      completed: true,
      priority: 'medium',
      createdAt: new Date(),
    },
    {
      id: '3',
      text: 'Write a Dockerfile',
      completed: false,
      priority: 'high',
      createdAt: new Date(),
    },
    {
      id: '4',
      text: 'Deploy the application',
      completed: false,
      priority: 'low',
      createdAt: new Date(),
    },
  ])
  const [filter, setFilter] = useState<FilterType>('all')

  const addTodo = useCallback((text: string, priority: Priority) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority,
      createdAt: new Date(),
    }
    setTodos((prev) => [newTodo, ...prev])
  }, [])

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const editTodo = useCallback((id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }, [])

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }, [])

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
          My Todos
        </h1>
        <p className="text-gray-500 text-sm">Stay organized, stay productive</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <TodoInput onAdd={addTodo} />
        </div>

        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <TodoStats
            total={todos.length}
            active={activeCount}
            completed={completedCount}
          />
        </div>

        <div className="p-4 border-b border-gray-100">
          <TodoFilter
            current={filter}
            onChange={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
          />
        </div>

        <div className="divide-y divide-gray-100">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </div>

        {completedCount > 0 && (
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors duration-200 flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Clear completed ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
