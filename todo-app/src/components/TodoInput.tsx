'use client'

import { useState, FormEvent } from 'react'
import { Priority } from '@/types/todo'

interface TodoInputProps {
  onAdd: (text: string, priority: Priority) => void
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState<Priority>('medium')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed, priority)
    setText('')
    setPriority('medium')
  }

  const priorityColors: Record<Priority, string> = {
    low: 'bg-green-100 text-green-700 border-green-300',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    high: 'bg-red-100 text-red-700 border-red-300',
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        >
          Add
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">Priority:</span>
        {(['low', 'medium', 'high'] as Priority[]).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPriority(p)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize transition-all duration-200 ${
              priority === p
                ? priorityColors[p] + ' ring-2 ring-offset-1 ring-current'
                : 'bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </form>
  )
}
