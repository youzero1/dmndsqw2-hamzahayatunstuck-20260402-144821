'use client'

interface TodoStatsProps {
  total: number
  active: number
  completed: number
}

export default function TodoStats({ total, active, completed }: TodoStatsProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{completed} of {total} completed</span>
          <span className="font-semibold text-indigo-600">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="flex gap-3 text-center">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-indigo-600">{active}</span>
          <span className="text-xs text-gray-400">Active</span>
        </div>
        <div className="w-px bg-gray-200" />
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-purple-600">{completed}</span>
          <span className="text-xs text-gray-400">Done</span>
        </div>
      </div>
    </div>
  )
}
