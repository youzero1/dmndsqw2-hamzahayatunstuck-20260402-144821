'use client'

import { FilterType } from '@/types/todo'

interface TodoFilterProps {
  current: FilterType
  onChange: (filter: FilterType) => void
  activeCount: number
  completedCount: number
}

export default function TodoFilter({
  current,
  onChange,
  activeCount,
  completedCount,
}: TodoFilterProps) {
  const filters: { value: FilterType; label: string; count?: number }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active', count: activeCount },
    { value: 'completed', label: 'Completed', count: completedCount },
  ]

  return (
    <div className="flex gap-1">
      {filters.map(({ value, label, count }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            current === value
              ? 'bg-indigo-500 text-white shadow-sm'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          {label}
          {count !== undefined && (
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                current === value
                  ? 'bg-indigo-400 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
