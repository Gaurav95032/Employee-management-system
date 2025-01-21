import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
  const {userData, setUserData} = useContext(AuthContext)
  return (
    <div className="flex flex-col gap-6 mt-[50px] h-[600px] overflow-y-auto px-5 py-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <div className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-md">
        <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 py-4 px-6 rounded-xl h-[80px] transition-all duration-300">
          <h1 className="inline-block bg-yellow-500 px-4 py-2 rounded-full text-white font-semibold shadow-sm">Name</h1>
          <h1 className="bg-blue-600 px-4 py-2 rounded-lg w-[120px] h-full overflow-y-auto text-white text-sm leading-relaxed scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
            Accepted Task
          </h1>
          <h1 className="inline-block bg-red-500 px-4 py-2 rounded-full text-white font-semibold shadow-sm">
            Failed Task
          </h1>
          <h1 className="inline-block bg-green-500 px-4 py-2 rounded-full text-white font-semibold shadow-sm">
            Completed Task
          </h1>
          <h1 className="bg-purple-600 px-4 py-2 rounded-lg w-[120px] h-full overflow-y-auto text-white text-sm leading-relaxed scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100">
            New Task
          </h1>
        </div>
      </div>
      {userData.employee.map((elem, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center justify-between bg-white py-4 px-6 rounded-xl shadow-sm h-[80px] transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:bg-gray-50"
          >
            <h1 className="inline-block bg-yellow-500 px-4 py-2 rounded-full text-white font-semibold shadow-sm transition-all duration-300 hover:bg-yellow-600">
              {elem.firstname}
            </h1>
            <h1 className="bg-blue-600 px-4 py-2 rounded-lg w-[120px] h-full overflow-y-auto text-white text-sm leading-relaxed scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 transition-all duration-300 hover:bg-blue-700">
              {elem.taskNumbers.active}
            </h1>
            <h1 className="inline-block bg-red-500 px-4 py-2 rounded-full text-white font-semibold shadow-sm transition-all duration-300 hover:bg-red-600">
              {elem.taskNumbers.failed}
            </h1>
            <h1 className="inline-block bg-green-500 px-4 py-2 rounded-full text-white font-semibold shadow-sm transition-all duration-300 hover:bg-green-600">
              {elem.taskNumbers.completed}
            </h1>
            <h1 className="bg-purple-600 px-4 py-2 rounded-lg w-[120px] h-full overflow-y-auto text-white text-sm leading-relaxed scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100 transition-all duration-300 hover:bg-purple-700">
              {elem.taskNumbers.newTask}
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default AllTask

