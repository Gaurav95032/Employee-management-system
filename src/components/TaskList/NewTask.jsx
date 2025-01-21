import React from "react"

const NewTask = ({ data }) => {
  return (
    <div className="h-[90%] flex-shrink-0 w-[300px] bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl px-6 py-5 shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex flex-row items-center justify-between mb-3">
        <h2 className="text-sm font-semibold bg-yellow-600 rounded-full px-4 py-1 text-white shadow-md">{data.category}</h2>
        <h3 className="text-sm font-medium text-yellow-100">{data.taskDate}</h3>
      </div>
      <div className="flex flex-col items-start justify-start h-[90%]">
        <h1 className="text-2xl font-bold text-white mb-3">{data.taskTitle}</h1>
        <p className="text-sm font-medium text-yellow-100 text-ellipsis overflow-hidden line-clamp-4 mb-4">
          {data.taskDescription}
        </p>
        <div className="mt-auto w-full flex flex-row items-center justify-between gap-3">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Accept
          </button>
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTask

